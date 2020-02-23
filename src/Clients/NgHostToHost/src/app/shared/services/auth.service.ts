import { Injectable,Injector } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx'

import { Global } from '../global';
import { ProfileService } from './profile.service'
import { IParemeter } from '../models/profile';
import { Body } from '@angular/http/src/body';
import { UsuarioLogin } from '../models/UsuarioLogin';
import { AlertComponent } from 'ngx-bootstrap';
@Injectable()
export class AuthService {
    isLoggedIn = false;
    param:IParemeter= {
      estadoFirmaAprobadaId: "",
      estadoFirmaPendienteId: "",
      estadoFirmaRechazadaId:"",
      estadoTransaccionAprobadoId:"",
      estadoTransaccionEnviadoId:"",
      estadoTransaccionRechazadoId:"",
    };

    constructor(
      private _http: Http,
      private injector:Injector,
      private _profileService:ProfileService) { }
      redirectUrl: string;
    

      createAuthorizationHeader(headers: Headers,u,p) {
        headers.append('Authorization', 'Basic ' +
          btoa(u+':'+p)); 
      }
      getAuthenticationHeader() : Headers {
        let headers = new Headers();
        headers.append('Token',localStorage.getItem('token')); 
        return headers;
      }
      login(userName: string, password: string) :Observable<boolean>{
        if (!userName || !password) {
            return;
        };
       
        let headers = new Headers();
       
        //this.createAuthorizationHeader(headers,userName,password);
        let url = Global.AuthUrl ;// + 'Token';
        let usuariolog = new UsuarioLogin();
        usuariolog.Email=userName;
        usuariolog.Password= password;
       
         return this._http.post(url,{ Email:usuariolog.Email,Password:usuariolog.Password})
            .map((response: Response) => {
                if (response.status==200) {
                    localStorage.setItem('token',  response.json().token );//response.headers.get("Token")
                    var t=new Date();
                    t.setSeconds(t.getSeconds() +Number(response.json().expiration));
                    localStorage.setItem('expires_at',t.toString());
                    this.isLoggedIn=true;
                    this._profileService.nombreCorporativo=response.json().user;//response.json().NombreCompleto;
                    this._profileService.nombres=response.json().user;
                    this._profileService.apellidos="10";
                    this._profileService.rolId="10";
                    this._profileService.usuario="10";
                    this._profileService.unId="10";
                    this._profileService.rol="10";
                    this._profileService.sociedad="10";
                    this._profileService.areaSistemaId="10";
                    this.param.estadoTransaccionAprobadoId="847F0F90-528E-4F6E-8763-351844E13D93";//response.json().Parametro.RolConsultorId;
                    this.param.estadoTransaccionEnviadoId="7B9EDDCA-5EE1-4DB9-AFFA-2F7E8FA39C56";//response.json().Parametro.RolJefeAplicaionId;
                    this.param.estadoTransaccionRechazadoId="218E0819-E3B1-47D5-8AC4-0CA203DDB837";//response.json().Parametro.MotivoTransferenciaDevolucionId;
                    this.param.estadoFirmaAprobadaId="C0870CC7-012F-4E7A-A757-0096214FC776";//response.json().Parametro.MotivoTransferenciaReasignarId;
                    this.param.estadoFirmaPendienteId="16275B8F-339B-4D87-B88A-95DC601F7AFD";//response.json().Parametro.TipoActividadRequerimientoId;
                    this.param.estadoFirmaRechazadaId="4DBFBB91-833A-4E0E-9152-8CF3E3B459C0";//response.json().Parametro.TipoActividadProyectoId;
                    this._profileService.parameter=this.param;
                    this._profileService.opciones=[{opcionId:"w",padreId:"2",url:"2"}];
                    return true;
                } else {
                    return false;
                }
            }).catch((error: any) => {
              return Observable.of(false);
          });
    }
      isAuthorized() {
        let expiresOn = localStorage.getItem('expires_at');
        let token = localStorage.getItem('token');
        var isTokenExpired = new Date(expiresOn)< new Date();
        var validToken =token != "" && token != null;
        return validToken && !isTokenExpired;
      }
      logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('expires_at');
        this.isLoggedIn = false;
        const router = this.injector.get(Router);
        router.navigate(['/login']);
      }
}