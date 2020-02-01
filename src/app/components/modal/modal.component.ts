import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private classModal = 'content hide';
  // tslint:disable-next-line: variable-name
  private _movieSelected: MovieModel;

  @Input()
  set showModal(showModal: boolean) {
    this.classModal = showModal ? 'content show' : 'content hide';
  }

  @Input()
  set movieSelected(movieSelected: MovieModel) {
    this._movieSelected = movieSelected;
  }

  constructor(private toastr: ToastrService) { }

  ngOnInit() { }

  close() {
    this.classModal = 'content hide';
  }

  addOnMyList(movieSelected: MovieModel) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) as any;
    currentUser.mylist.push(movieSelected);

    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    this.toastr.success('Added with success on your list');
  }

  addOnAlreadyWatched(movieSelected: MovieModel) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) as any;
    currentUser.watchedMovies.push(movieSelected);

    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    this.toastr.success('Added with success on your list of already watched');
  }
}
