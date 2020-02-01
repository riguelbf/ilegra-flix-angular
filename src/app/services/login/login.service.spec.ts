import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { createLocalStorageMock } from '../../helpers/test/localstorage-mock';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    const {
      getItem,
      setItem,
      removeItem
    } = createLocalStorageMock.mockLocalStorage;

    spyOn(localStorage, 'getItem').and.callFake(getItem);
    spyOn(localStorage, 'setItem').and.callFake(setItem);
    spyOn(localStorage, 'removeItem').and.callFake(removeItem);
  });

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('should todo login', () => {
    const email = 'fakeUser@gmail.com';
    const password = '123456';
    const service: LoginService = TestBed.get(LoginService);
    const isSuccess = service.login(email, password);

    expect(isSuccess).toBeTruthy();
  });

  it('should todo logout', () => {
    localStorage.setItem('currentUser', 'fakeCurrentUser');
    const service: LoginService = TestBed.get(LoginService);

    service.logout();

    expect(localStorage.getItem('currentUser')).toBeNull();
  });
});
