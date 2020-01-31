import { Component, OnInit, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup
} from '@angular/forms';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [FormBuilder]
})
export class LoginComponent implements OnInit {
  public user: User;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private loginService: LoginService
  ) {
    this.form = formBuilder.group({
      email: new FormControl('', Validators.email),
      password: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {}

  showSuccess() {
    this.toastr.success('Logged!', 'IlegraFlix!');
  }

  async login() {
    const email = this.form.controls.email.value;
    const password = this.form.controls.password.value;

    const existUser = await this.loginService
      .login(email, password)
      .toPromise();
    existUser
      ? this.router.navigate(['/home'])
      : this.toastr.error('Login failed!');
  }
}
