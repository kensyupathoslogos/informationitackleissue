import { Routes } from '@angular/router';
import { Signin } from './signin/signin';
import { Activity } from './activity/activity';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: Signin
  },
  {
    path: 'activity',
    component: Activity
  }
];
