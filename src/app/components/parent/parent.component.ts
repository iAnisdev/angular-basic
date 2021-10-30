import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  readonly amount: number = 14
  username: string = 'marahmanjs104714'
  user: {name: string , age: number} = {
    name: this.username,
    age: this.amount
  }
  constructor() { }

  ngOnInit(): void {
  }

}
