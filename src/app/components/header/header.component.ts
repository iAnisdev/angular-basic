import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  readonly title: string = 'Basic Angular App';
  showSub: boolean = false
  constructor() { }

  updateShowSub(){
    console.log('toggling....')
    if(this.showSub ){
      this.showSub = false

    }else{
      this.showSub = true

    }
     console.log('toggled')
  }

  ngOnInit(): void {
    console.log("hello from init")
  }

}
