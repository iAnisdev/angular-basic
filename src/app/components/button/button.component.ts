import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text: string = ''
  @Input() bgColor:  string = 'green'
  @Input() btnColor: string = 'white'
  @Output() btnClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log('clicked')
    this.btnClick.emit()
    console.log('emitted')
  }

}
