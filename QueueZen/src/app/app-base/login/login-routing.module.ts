import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from 'src/app/services/authen/auth-guard.service';
import { AuthService } from 'src/app/services/authen/auth.service';
import { LoginComponent } from './login.component';

const LOGIN_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(LOGIN_ROUTES)
  ],
  exports: [RouterModule],
  providers: [AuthGuardService, AuthService]
})
export class LoginRoutingModule { }
