import { Component, OnInit,Input,Output, TemplateRef,EventEmitter,ViewChild} from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalDirective } from 'ngx-bootstrap';
@Component({
  selector: 'app-ok-modal',
  template:  `
  <div bsModal #okModal="bs-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true" [config]="{ backdrop: true }">
 <div class="modal-dialog modal-sm">
<div class="alert alert-success" role="alert" style="text-align:center">
<button type="button" (click)="okModal.hide()" class="close pull-right" aria-label="Close" style="margin-top:-12px;margin-right:-15px">
<span aria-hidden="true">&times;</span>
</button>
<h4 class="alert-heading"><span class="mdi mdi-cloud-check mdi-36px"></span></h4>
<p>{{message}}</p>
<hr>
 </div>

 </div>
</div>
 `,
  styles: []
})
export class OkModalComponent {
    @ViewChild('okModal') public okModal:ModalDirective;
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
        this.okModal.show();
    }
    hide(){
        this.okModal.hide();
    }
}