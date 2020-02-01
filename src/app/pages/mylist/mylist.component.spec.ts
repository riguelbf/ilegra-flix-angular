import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyListComponent } from './mylist.component';
import { routes } from '../../routes';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalComponent } from '../../components/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('MylistComponent', () => {
  let component: MyListComponent;
  let fixture: ComponentFixture<MyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MyListComponent,
        LoginComponent,
        HomeComponent,
        HeaderComponent,
        ModalComponent
      ],
      imports: [
        RouterTestingModule.withRoutes(routes),
        ReactiveFormsModule,
        FormsModule,
        FontAwesomeModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
