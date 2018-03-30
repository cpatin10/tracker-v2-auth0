import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output() navToggled = new EventEmitter();
  navOpen = false;

  constructor(
    private router: Router,
    public auth: AuthService,
    private flash: FlashMessagesService) { }

  ngOnInit() {
    // if nav is open after routing, close it
    this.router.events
      .filter(event => event instanceof NavigationStart && this.navOpen)
      .subscribe(event => this.toggleNav());
    // show errors, if any
    if (!this.auth.loggedIn && localStorage.getItem('authError')) {
      this.flash.show(
        localStorage.getItem('authError'),
        { cssClass: 'alert-success', timeOut: 3000 }
      );
      localStorage.removeItem('authError');
    }
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.navToggled.emit(this.navOpen);
  }
}
