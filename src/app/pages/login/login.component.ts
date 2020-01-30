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
    private toastr: ToastrService
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

  login() {
    this.router.navigate(['/home']);
  }
}
