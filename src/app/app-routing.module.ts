import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './pages/callback/callback.component';
import { ViewComponent } from './pages/view/view.component';
import { RecordComponent } from './pages/record/record.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'callback',
    component: CallbackComponent
  },
  {
    path: 'view',
    canActivate: [AuthGuard],
    component: ViewComponent
  },
  {
    path: 'record',
    canActivate: [AuthGuard],
    component: RecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
