import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  public loginForm;
  public loginSubmitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            // tslint:disable-next-line: max-line-length
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]
      ],
      password: ['', [Validators.required, Validators.maxLength(10)]]
    });
  }

  get fm() {
    return this.loginForm.controls;
  }

  authenticate() {
    this.loginSubmitted = true;
    if (!this.loginForm.valid) {
      return;
    }
    console.log('authenticated', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe( r => {
      // Show error
      console.log(r);
    });
  }
}
