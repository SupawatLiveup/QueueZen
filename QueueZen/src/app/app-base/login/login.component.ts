import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/authen/auth.service';
import { ViewService } from 'src/app/services/view/view.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private authService: AuthService, private router: Router, private viewService: ViewService) { }

  credential: { USERNAME: string, PASSWORD: string } = { USERNAME: 'username', PASSWORD: '1234' };

  ngOnInit() {

    this.formGroup = new FormGroup({
      USERNAME: new FormControl('', {
        validators: Validators.required
      }),
      PASSWORD: new FormControl('', {
        validators: Validators.required
      })
    });

    this.formGroup.setValue(this.credential);
  }

  btnLoginClick() {
    if (this.formGroup.valid) {
      const credential = this.formGroup.value;

      this.authService.login(credential).subscribe(response => {
        if (response.IS_SUCCESS) {
          this.viewService.alert('LOGIN COMPLETE');

          // Get the redirect URL from our auth service
          // If no redirect has been set, use the default
          const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
          // Redirect the user
          this.router.navigate([redirect]);
        } else {
          if (response.message === 'INVALID_USERNAME_OR_PASSWORD') {
            this.viewService.alert('INVALID USERNAME OR PASSWORD');
          }
        }
      });
    }
  }
}
