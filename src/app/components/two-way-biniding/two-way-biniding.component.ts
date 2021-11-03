import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-biniding',
  templateUrl: './two-way-biniding.component.html',
  styleUrls: ['./two-way-biniding.component.scss']
})
export class TwoWayBinidingComponent implements OnInit {
  title: string = 'This is my Title'
  red: string = 'red'
  yellow: string = 'yellow'
  constructor() { }

  ngOnInit(): void {
  }

}
