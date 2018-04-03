import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../validate/validate.service';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../../core/api.service';
import { AuthService } from '../../auth/auth.service';
import { LocationModel } from '../../core/models/location.model';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})

export class RecordComponent implements OnInit {
  pageTitle = 'Record Location';
  message: string;
  user: any;
  lastLat: number = undefined;
  lastLon: number = undefined;
  latitude: number;
  longitude: number;
  delay = 1000;
  canRecord = true;
  recording = false;
  record: boolean = true;

  constructor(
    private title: Title,
    private api: ApiService,
    private auth: AuthService,
    private validate: ValidateService,
    private flash: FlashMessagesService) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getLocation();
    clearInterval(this.auth.timer);
    this.auth.timer = setInterval(() => {
        if((this.lastLat===this.latitude) && (this.lastLon===this.longitude)){
          this.record = false;
        }
        else if((Math.abs(this.lastLat-this.latitude)!=0 && Math.abs(this.lastLat-this.latitude)<0.0000005) 
          || (Math.abs(this.lastLon-this.longitude)!=0 && Math.abs(this.lastLon-this.longitude)<0.0000005)){
          this.record = false;
        }
        else{
          this.record = true;
        }

        this.lastLat = this.latitude;
        this.lastLon = this.longitude;
        const location = new LocationModel(
          this.auth.userProfile.sub,
          this.latitude,
          this.longitude
        );
        if (this.validate.validateLocation(location) && this.record) {
          this.message = 'Recording location...';
          this.recording = true;
          this.api
            .postLocation2$(location)
            .subscribe(
              res => { },
              err => {
                console.error(err);
                this.flash.show(
                  err.errorDescription,
                  { cssClass: 'alert-danger', timeOut: 900 }
                );
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
