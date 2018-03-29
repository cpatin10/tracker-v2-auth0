import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { LocationModel } from '../../core/models/location.model';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit, OnDestroy {
  pageTitle = 'Locations';
  defaultLatitude = 6.199548;
  defaultLongitude = -75.57934;
  locationsListSub: Subscription;
  locationsList: LocationModel[];
  loading: boolean;
  error: boolean;

  constructor(
    private title: Title,
    private api: ApiService,
    private auth: AuthService) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getLocationsList();
  }

  private _getLocationsList() {
    this.loading = true;
    this.locationsListSub = this.api
      .getLocationsByUserID$(this.auth.userProfile.sub)
      .subscribe(
        res => {
          this.locationsList = res;
          this.loading = false;
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  ngOnDestroy() {
    this.locationsListSub.unsubscribe();
  }

}
