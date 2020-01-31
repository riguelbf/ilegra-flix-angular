import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { createLocalStorageMock } from '../../helpers/test/localstorage-mock';
import { routes } from '../../routes';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { HomeComponent } from '../../pages/home/home.component';
import { MyListComponent } from '../../pages/mylist/mylist.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        LoginComponent,
        HomeComponent,
        MyListComponent
      ],
      imports: [RouterModule.forRoot(routes)]
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
      'div[data-testid="header-navbar"]'
    );

    const profileInfo = fixture.debugElement.nativeElement.querySelector(
      'div[data-testid="header-profile-info"]'
    );

    expect(container).toBeTruthy();
    expect(navbar).toBeTruthy();
    expect(profileInfo).toBeTruthy();
  });

  it('should defined profile values', () => {
    const userEmail = component.userEmail$;
    const watched = component.alreadyWatched$;

    localStorage.setItem(
      'currentUser',
      JSON.stringify(
        '{id: 1, email: "riguel@gmail.com", password: "12345", watchedMovies: [{}], mylist: [{}]}'
      )
    );

    component.setProfileInfo();

    expect(component.userEmail$).not.toEqual(userEmail);
    expect(component.alreadyWatched$).not.toEqual(watched);
  });
});
