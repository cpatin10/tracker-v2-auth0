import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';
import { ApiService } from '../../core/api.service';
import { UserModel } from '../../core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  pageTitle = 'Tracker v2';

  constructor(
    private title: Title,
    private auth: AuthService,
    private api: ApiService) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    clearInterval(this.auth.timer);
    if (this.auth.loggedIn) {
      this.api
        .postUser$(new UserModel(this.auth.userProfile.sub))
        .subscribe(
          res => { },
          err => {
            console.error(err);
          }
        );
    }
  }

}
