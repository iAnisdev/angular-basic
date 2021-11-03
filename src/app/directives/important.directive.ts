import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appImportant]'
})
export class ImportantDirective {
  @Input() bgColor = 'yellow';
  @Input() textColor = 'black';
  el: ElementRef
  constructor(el: ElementRef) {
    this.el = el
  }
  ngOnInit(): void {
    this.initStyle(this.bgColor , this.textColor)
    
  }

  private initStyle(bgColor: string , textColor: string){
    this.el.nativeElement.style.backgroundColor = bgColor;
    this.el.nativeElement.style.color = textColor;
  }
}
