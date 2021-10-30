import { Component, OnInit , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  constructor() { }
  submitName(value: string){
    console.log(value)
  }
  ngOnInit(): void {
  }

}
