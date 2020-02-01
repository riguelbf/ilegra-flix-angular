import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { createLocalStorageMock } from '../../helpers/test/localstorage-mock';
import { routes } from '../../routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { HomeComponent } from '../../pages/home/home.component';
import { MyListComponent } from '../../pages/mylist/mylist.component';
import {
  FaIconComponent,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LoginComponent,
        HomeComponent,
        MyListComponent,
        ModalComponent
      ],
      imports: [
        RouterModule.forRoot(routes),
        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule
      ]
    }).compileComponents();

    const {
      getItem,
      setItem,
      removeItem
    } = createLocalStorageMock.mockLocalStorage;

    spyOn(localStorage, 'getItem').and.callFake(getItem);
    spyOn(localStorage, 'setItem').and.callFake(setItem);
    spyOn(localStorage, 'removeItem').and.callFake(removeItem);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a specific structure', () => {
    const container = fixture.debugElement.nativeElement.querySelector(
      'div[data-testid="header-container"]'
    );

    const navbar = fixture.debugElement.nativeElement.querySelector(
      'nav[data-testid="header-navbar"]'
    );

    const profileInfo = fixture.debugElement.nativeElement.querySelector(
      'div[data-testid="header-profile-info"]'
    );

    expect(container).toBeTruthy();
    expect(navbar).toBeTruthy();
    expect(profileInfo).toBeTruthy();
  });

  xit('should defined profile values', async () => {
    const userEmail = component.userEmail$;
    const watched = component.alreadyWatched$;

    localStorage.setItem(
      'currentUser',
      JSON.stringify(
        '{id: 1, email: "riguel@gmail.com", password: "12345", watchedMovies: [{}], mylist: [{}]}'
      )
    );

    await component.setProfileInfo();

    expect(component.userEmail$).not.toEqual(userEmail);
    expect(component.alreadyWatched$).not.toEqual(watched);
  });
});
