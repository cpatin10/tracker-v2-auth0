import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthService } from './auth/auth.service';
import { ApiService } from './core/api.service';
import { ValidateService } from './validate/validate.service';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './header/header.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { LoadingComponent } from './core/loading.component';
import { ViewComponent } from './pages/view/view.component';
import { RecordComponent } from './pages/record/record.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CallbackComponent,
    LoadingComponent,
    ViewComponent,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCEDqsLErpknyVKLvWrrr9XqQ4akPfT48M'
    })
  ],
  providers: [
    Title,
    AuthService,
    ApiService,
    ValidateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
