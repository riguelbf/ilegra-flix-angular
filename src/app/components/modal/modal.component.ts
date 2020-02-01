import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private classModal = 'content hide';
  private _movieSelected: MovieModel;

  @Input()
  set showModal(showModal: boolean) {
    this.classModal = showModal ? 'content show' : 'content hide';
  }

  @Input()
  set movieSelected(movieSelected: MovieModel) {
    this._movieSelected = movieSelected;
  }

  constructor() {}

  ngOnInit() {}

  close() {
    this.classModal = 'content hide';
  }
}
