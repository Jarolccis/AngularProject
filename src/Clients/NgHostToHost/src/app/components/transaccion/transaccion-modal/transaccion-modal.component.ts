import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/*Models*/
import {Transaccion} from '../../../shared/models/transaccion';

@Component({
  selector: 'app-transaccion-modal',
  templateUrl: './transaccion-modal.component.html',
  styles: []
})
export class TransaccionModalComponent implements OnInit {
  @Input() transaccion:Transaccion;
  @Output() public hide=new EventEmitter();
  public transaccionModalHide() {
    this.hide.emit();
  }
  @Output() public hideOk=new EventEmitter<any>();
  public transaccionModalHideOk(message:string) {
    this.hideOk.emit(message);
  }
  constructor() { }

  ngOnInit() {
  }

}
