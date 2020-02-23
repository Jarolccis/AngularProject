import { Component, OnInit,Input,Output, TemplateRef,EventEmitter,ViewChild} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-error-modal',
  template:  `
  <div bsModal #errorModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" [config]="{ ignoreBackdropClick: true }">
 <div class="modal-dialog modal-sm">
 <div class="modal-content alert-danger" style="background-color:#f8d7da!important">
<div class="alert" role="alert" style="text-align:center">
<button type="button" (click)="errorModal.hide()" class="close pull-right" aria-label="Close" style="margin-top:-12px;margin-right:-15px">
<span aria-hidden="true">&times;</span>
</button>
<h4 class="alert-heading"><span class="mdi mdi-close-circle mdi-36px"></span></h4>
<p style="white-space:pre-line">{{message}}</p>
<hr>
 </div>
 </div>
 </div>
</div>
 `,
  styles: []
})
export class ErrorModalComponent {
    @ViewChild('errorModal') public errorModal:ModalDirective;
    message:string;
    public n: number = 1;
    constructor(){
        setTimeout(() => {
            this.n = this.n + 10;
            this.hide();
          }, 1000);
    }
    show(msg){
        this.message=msg;
        this.errorModal.show();
    }
    hide(){
        this.errorModal.hide();
    }
}