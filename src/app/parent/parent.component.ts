import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  total = 0;

  constructor() { }

  ngOnInit() {
  }

  modifyParent(value: number) {
    console.log(value);
    this.total += value;
  }

}
