import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponent } from './modal.component';
import { createLocalStorageMock } from '../../helpers/test/localstorage-mock';
import { currentUserMock } from './../../helpers/stubs/data.stub';
import { all } from './../../helpers/stubs/movies';
import { MovieModel } from '../../models/movie.model';
import { ToastrModule } from 'ngx-toastr';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ModalComponent],
        imports: [ToastrModule.forRoot()]
      }).compileComponents();

      const { getItem, setItem, removeItem } = createLocalStorageMock.mockLocalStorage;

      spyOn(localStorage, 'getItem').and.callFake(getItem);
      spyOn(localStorage, 'setItem').and.callFake(setItem);
      spyOn(localStorage, 'removeItem').and.callFake(removeItem);
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should add new movie on particular user list', () => {
    localStorage.setItem('currentUser', JSON.stringify(currentUserMock));

    const movieSelected = (all.results[0] as unknown) as MovieModel;
    component.addOnMyList(movieSelected);

    const currentUser = JSON.parse(localStorage.getItem('currentUser')) as any;
    expect(currentUser.mylist.length).toBeGreaterThan(currentUserMock.mylist.length);
  });

  xit('should add new movie on already watched list', () => {
    localStorage.setItem('currentUser', JSON.stringify(currentUserMock));

    const movieSelected = (all.results[0] as unknown) as MovieModel;
    component.addOnMyList(movieSelected);

    const currentUser = JSON.parse(localStorage.getItem('currentUser')) as any;
    expect(currentUser.watchedMovies.length).toBeGreaterThan(currentUserMock.watchedMovies.length);
  });
});
