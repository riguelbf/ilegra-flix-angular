import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser$ = faUser;
  userEmail$ = 'User not found';
  alreadyWatched$ = 0;

  constructor() {}

  ngOnInit() {
    this.setProfileInfo();
  }

  async setProfileInfo() {
    const currentUser = JSON.parse(
      (await localStorage.getItem('currentUser')) as any
    );
    debugger;
    if (currentUser) {
      this.userEmail$ = currentUser.email as string;
      this.alreadyWatched$ = currentUser.watchedMovies.length;
    }
  }
}
