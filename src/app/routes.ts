import { LoginComponent } from './pages/login/login.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { MyListComponent } from './pages/mylist/mylist.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mylist',
    component: MyListComponent
  }
];
