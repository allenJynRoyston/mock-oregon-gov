declare var $:any;

import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
  selector: '[ui-modal]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseclick)': 'onMouseLeave()',
    '(click)':      'onClick()'
  }
})
export class uiSemanticModal {
  @Input('options') options:any

  constructor(private el: ElementRef){

  }

  onMouseEnter(){

  }

  onMouseLeave(){

  }

  onClick(){
    var selector = ".modal";
    if(this.options.container != undefined){
      selector = this.options.container;
    }
    $(selector)
      .modal(this.options)
      .modal('show')
  }

}
