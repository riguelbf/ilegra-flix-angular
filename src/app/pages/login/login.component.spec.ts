import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { Router, RouterModule } from '@angular/router';
import { routes } from '../../routes';
import { AppComponent } from '../../app.component';
import { Location } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, AppComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forRoot(routes),
        RouterTestingModule.withRoutes(routes),
        ToastrModule.forRoot()
      ]
    }).compileComponents();
    router = TestBed.get(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have specific structure', () => {
    const header = fixture.debugElement.nativeElement.querySelector(
      'header[data-testid="header"]'
    );
    const form = fixture.debugElement.nativeElement.querySelector(
      'form[data-testid="form"]'
    );
    const inputEmail = fixture.debugElement.nativeElement.querySelector(
      'input[data-testid="email"]'
    );
    const inputPassword = fixture.debugElement.nativeElement.querySelector(
      'input[data-testid="password"]'
    );
    const buttonSubmit = fixture.debugElement.nativeElement.querySelector(
      'button[data-testid="btn-submit"]'
    );

    expect(header).toBeTruthy();
    expect(form).toBeTruthy();
    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
    expect(buttonSubmit).toBeTruthy();
  });

  it('should to redirect to app', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue('123456789');
    expect(component.form.valid).toBeTruthy();

    component.login();
    expect('/').toEqual(router.url);
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });
});
