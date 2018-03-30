import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../validate/validate.service';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { LocationModel } from '../../core/models/location.model';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})

export class RecordComponent implements OnInit {
  pageTitle = 'Record Location';
  message: string;
  user: any;
  latitude: number;
  longitude: number;
  delay = 1000;
  canRecord = true;
  recording = false;

  constructor(
    private title: Title,
    private api: ApiService,
    private auth: AuthService,
    private validate: ValidateService) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getLocation();
    clearInterval(this.auth.timer);
    this.auth.timer = setInterval(() => {
      const location = new LocationModel(
        this.auth.userProfile.sub,
        this.latitude,
        this.longitude
      );
      if (this.validate.validateLocation(location)) {
        this.message = 'Recording location...';
        this.recording = true;
        this.api
          .postLocation$(location)
          .subscribe(
            res => { },
            err => {
              console.error(err);
            }
          );
      }
    }, this.delay);
  }

  private _getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      }, error => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            this.message = 'User denied the request for Geolocation';
            break;
          case error.POSITION_UNAVAILABLE:
            this.message = 'Location information is unavailable';
            break;
          case error.TIMEOUT:
            this.message = 'The request to get user location timed out';
            break;
          default:
            this.message = 'An unknown error occurred';
            break;
        }
        this.canRecord = false;
      });
    } else {
      this.message = 'Geolocation is not supported by this browser';
      this.canRecord = false;
    }
  }

  private _stopRecording() {
    clearInterval(this.auth.timer);
    this.recording = false;
    this.message = 'No longer recording';
  }

}
