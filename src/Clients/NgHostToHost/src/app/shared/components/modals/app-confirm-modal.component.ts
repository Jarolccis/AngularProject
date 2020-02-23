import { Component, OnInit,Input,Output, TemplateRef,EventEmitter,ViewChild} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-confirm-modal',
  template:  `
  <div bsModal #confirmModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" [config]="{ ignoreBackdropClick: true }">
 <div class="modal-dialog modal-sm">
   <div class="modal-content">
   <div class="modal-body text-center">
   <p>{{message}}</p>
   <div>
    <textarea rows="4" *ngIf="showTextInput" style="width:100%"> </textarea>
   </div>
   <button type="button" class="btn btn-default" (click)="confirm()" >Sí</button>
   <button type="button" class="btn btn-primary" (click)="hide()" >No</button>
 </div>
   </div>
 </div>
</div>
 `,
  styles: []
})
export class ConfirmModalComponent {
    @ViewChild('confirmModal') public confirmModal:ModalDirective;
    @Input() message:string;
    @Input() showTextInput:boolean;
    @Input() isRequiredTextInput:boolean;
    id:Number;
    constructor(){
    }
    show(id){
        this.id=id;
        this.confirmModal.show();
    }
    hide(){
        this.confirmModal.hide();
    }    
    confirm(): void {
       this.okModal();
       this.confirmModal.hide();
    }
    @Output() public ok=new EventEmitter();
    public okModal() {
      this.ok.emit(this.id);
    }
}