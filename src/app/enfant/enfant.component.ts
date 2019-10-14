import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css'],
})
export class EnfantComponent {

  count = 0;
  @Output() sortie: EventEmitter<number> = new EventEmitter();


  constructor() { }

  increment() {
    this.sortie.emit(1);
    this.count++;
  }

  decrement() {
    if (this.count > 0) {
      this.sortie.emit(-1);
      this.count--;
    }
  }

  reset() {
    this.sortie.emit(-this.count);
    this.count = 0;
  }
}
