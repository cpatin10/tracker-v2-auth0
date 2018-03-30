import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { ENV } from './env.config';
import { LocationModel } from './models/location.model';
import { UserModel } from './models/user.model';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

  constructor(
    private http: HttpClient,
    private auth: AuthService) { }

  private get _authHeader(): string {
    return `Bearer ${localStorage.getItem('access_token')}`;
  }

  // GET all locations linked to a specific user (login required)
  getLocationsByUserID$(userID: string): Observable<LocationModel[]> {
    return this.http
      .get(`${ENV.BASE_API}locations/${userID}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // POST a location linked to a specific user (login required)
  postLocation$(location: LocationModel): Observable<LocationModel> {
    return this.http
      .post(`${ENV.BASE_API}record`, location, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  // POST a new user (login required)
  postUser$(user: UserModel): Observable<UserModel> {
    return this.http
      .post(`${ENV.BASE_API}register`, user, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleError(error))
      );
  }

  private _handleError(err: HttpErrorResponse | any): Observable<any> {
    const errorMsg = err.message || 'Error: Unable to complete request.';
    if (err.message && err.message.indexOf('No JWT present') > -1) {
      this.auth.login();
    }
    return Observable.throw(errorMsg);
  }

}
