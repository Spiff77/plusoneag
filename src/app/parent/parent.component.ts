import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  total = 0;

  constructor() { }

  modifyParent(value: number) {
    this.total += value;
  }

}
