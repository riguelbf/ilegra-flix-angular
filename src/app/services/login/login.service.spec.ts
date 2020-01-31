import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';

describe('LoginService', () => {
  function createLocalStorageMock() {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    createLocalStorageMock();
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
