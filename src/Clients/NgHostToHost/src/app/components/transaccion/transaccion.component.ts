import { Component, OnInit,TemplateRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/*Models*/
import {Transaccion} from '../../shared/models/transaccion';

/*Services*/
import {TransaccionService} from '../../shared/services/transaccion.service'
import { ProfileService } from '../../shared/services/profile.service';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-transaccion',
  templateUrl: './transaccion.component.html',
  styles: []
})
export class TransaccionComponent implements OnInit {
  transaccion:Transaccion;
  transacciones:Transaccion[]=[];
  
  criteria = { TipoOperacionId: null,OperacionId: null,BancoOrigenId:null, NumeroSAP: null,MonedaId:null,Importe:null,BancoDestinoId:null,SociedadDestinoId:null,EstadoId:null,FirmaEstadoId:null,FirmaFecha:null};//PageSize:10,PageNumber:1,SortColumn:'Fecha',SortOrder:'DESC'
  criteriaSort = { TipoOperacionId: null,OperacionId: null,BancoOrigenId:null, NumeroSAP: null,MonedaId:null,Importe:null,BancoDestinoId:null,SociedadDestinoId:null,EstadoId:null,FirmaEstadoId:null,FirmaFecha:null};//,PageSize:10,PageNumber:1,SortColumn:'Fecha',SortOrder:'DESC'

  //Pagination
  maxSize: number = 8;
  numPages: number = 0;
  totalItems: number = 0;
  
  //Modal
  transaccionModal: BsModalRef;

  constructor(private route: ActivatedRoute, private _transaccionService: TransaccionService,
    public _profileService:ProfileService, private modalService: BsModalService) {
    this.route.params.subscribe( params =>{
      if(params.id=="Aceptada"){
        this.criteria.EstadoId="847F0F90-528E-4F6E-8763-351844E13D93";
      }else if(params.id=="Rechazada"){
        this.criteria.EstadoId="218E0819-E3B1-47D5-8AC4-0CA203DDB837";
      }else {
        this.criteria.EstadoId=null;
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
    this._transaccionService.listar(criteria).subscribe(transacciones => { 
      this.transacciones = transacciones; 
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
  abrirModal(transaccion:Transaccion,template: TemplateRef<any>) {
    this.transaccion=transaccion;
    this.transaccionModal = this.modalService.show(template, {ignoreBackdropClick: true, class: 'gray modal-lg' });
  }
  public transaccionModalHide(){
    this.transaccionModal.hide();
  }
  public transaccionModalHideOk(msg){
    this.transaccionModal.hide();
    this.ordenar('');
  }
}
