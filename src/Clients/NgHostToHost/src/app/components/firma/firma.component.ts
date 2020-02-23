import { Component, OnInit, ViewChild,TemplateRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/*Models*/
import {Transaccion} from '../../shared/models/transaccion';

/*Services*/
import {FirmaService} from '../../shared/services/firma.service'

//#Shared Modals
import { ConfirmModalComponent } from '../../shared/components/modals/app-confirm-modal.component';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styles: []
})
export class FirmaComponent implements OnInit {
  
  //ViewChild
  @ViewChild('aprobarTransaccionModal') aprobarTransaccionModal:ConfirmModalComponent;
  @ViewChild('rechazarTransaccionModal') rechazarTransaccionModal:ConfirmModalComponent;

  firma:Transaccion;
  firmas:Transaccion[]=[];
  
  criteria = { TipoOperacionId: null,OperacionId: null,BancoOrigenId:null, NumeroSAP: null,MonedaId:null,Importe:null,BancoDestinoId:null,SociedadDestinoId:null,EstadoId:null,FirmaEstadoId:null,FirmaFecha:null};//PageSize:10,PageNumber:1,SortColumn:'Fecha',SortOrder:'DESC'
  criteriaSort = { TipoOperacionId: null,OperacionId: null,BancoOrigenId:null, NumeroSAP: null,MonedaId:null,Importe:null,BancoDestinoId:null,SociedadDestinoId:null,EstadoId:null,FirmaEstadoId:null,FirmaFecha:null};//,PageSize:10,PageNumber:1,SortColumn:'Fecha',SortOrder:'DESC'

  maxSize: number = 8;
  numPages: number = 0;
  totalItems: number = 0;

  //Modal
  firmaModal: BsModalRef;

  constructor(private route: ActivatedRoute,private _firmaService: FirmaService, 
    private modalService: BsModalService) {
    this.route.params.subscribe( params => {
      if(params.id=="Pendiente"){
        this.criteria.FirmaEstadoId="16275B8F-339B-4D87-B88A-95DC601F7AFD";
      }else if(params.id=="Aprobado"){
        this.criteria.FirmaEstadoId="16275B8F-339B-4D87-B88A-95DC601F7AFD";
      }else{
        this.criteria.FirmaEstadoId=null;
      }
      this.buscar();
    }); 
  }

  ngOnInit() {
    this.buscar();
  }
  buscar(){
    this.criteriaSort=this.criteria;
    this.listar(this.criteria);
  }
  listar(criteria:any){
    this._firmaService.listar(criteria).subscribe(transacciones => { 
      this.firmas = transacciones; 
      if(transacciones.length>0){
        this.totalItems=transacciones.length
      };
    });
  }
  ordenar(col): void {
    // if (col !== '' && col!=undefined) {
    //   this.criteriaSort.SortColumn = col;
    //   if (this.criteriaSort.SortOrder == 'DESC')
    //     this.criteriaSort.SortOrder = 'ASC';
    //   else
    //   this.criteriaSort.SortOrder = 'DESC';
    // }
    this.listar(this.criteriaSort);
  }

  //Modal
  abrirModal(firma:Transaccion,template: TemplateRef<any>) {
    this.firma=firma;
    this.firmaModal = this.modalService.show(template, {ignoreBackdropClick: true, class: 'gray modal-lg' });
  }
  public firmaModalHide(){
    this.firmaModal.hide();
  }
  public firmaModalHideOk(msg){
    this.firmaModal.hide();
    this.ordenar('');
  }
}
