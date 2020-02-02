import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-player',
  templateUrl: './modal-player.component.html',
  styleUrls: ['./modal-player.component.scss']
})
export class ModalPlayerComponent implements OnInit {
  classModalPlayer: string;

  @Input()
  public movieYouTubeID = '3bGNuRtlqAQ';

  @Input()
  set showModalPlayer(showModalPlayer: boolean) {
    this.classModalPlayer = showModalPlayer ? 'content show' : 'content hide';
  }

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.classModalPlayer = 'content hide';
  }
}
