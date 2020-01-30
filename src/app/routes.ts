import { LoginComponent } from './pages/login/login.component';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: AppComponent }
];
