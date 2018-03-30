import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  pageTitle = 'Tracker v2';

  constructor(
    private title: Title,
    private auth: AuthService) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    clearInterval(this.auth.timer);
  }

}
