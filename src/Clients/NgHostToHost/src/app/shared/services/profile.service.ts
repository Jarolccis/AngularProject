import {Injectable} from '@angular/core';
import { IProfile,IParemeter, IOpcion } from '../models/profile';

    @Injectable()
    export class ProfileService implements IProfile {   
        paremter: IParemeter;
        private _token: string;
        private _expiration: string;
        private _usuario: string;
        private _rolId: string;
        private _unId: string;
        private _nombreCorporativo: string;
        set parameter(val){
            sessionStorage.setItem('paremter', JSON.stringify(val));
        }
        get parameter():IParemeter{
            return JSON.parse(sessionStorage.getItem('paremter'));
        }
        set opciones(val){
            sessionStorage.setItem('opciones', JSON.stringify(val));
        }
        get opciones():IOpcion[]{
            return JSON.parse(sessionStorage.getItem('opciones'));
        }
       set token(val){
           this._token=val;
       }
       get token(){
           return this._token;
       }
       set expiration(val){
        this._expiration=val;
    }
    get expiration(){
        return this._expiration;
    }
       set nombreCorporativo(val){
        sessionStorage.setItem('nombreCorporativo', val);
        this._nombreCorporativo=val;
        }
        get nombreCorporativo(){
            return sessionStorage.getItem('nombreCorporativo');
        }

        set usuario(val){
            sessionStorage.setItem('usuario', val);
        }
        get usuario(){
            return sessionStorage.getItem('usuario');
        }

        set rolId(val){
            sessionStorage.setItem('rolId', val);
        }
        get rolId(){
            return sessionStorage.getItem('rolId');
        }

        set unId(val){
            sessionStorage.setItem('unId', val);
        }
        get unId(){
            return sessionStorage.getItem('unId');
        }
        set nombres(val){
            sessionStorage.setItem('nombres', val);
        }
        get nombres(){
            return sessionStorage.getItem('nombres');
        }
        
        set apellidos(val){
            sessionStorage.setItem('apellidos', val);
        }
        get apellidos(){
            return sessionStorage.getItem('apellidos');
        }
        set sociedad(val){
            sessionStorage.setItem('sociedad', val);
        }
        get sociedad(){
            return sessionStorage.getItem('sociedad');
        }
        
        set rol(val){
            sessionStorage.setItem('rol', val);
        }
        get rol(){
            return sessionStorage.getItem('rol');
        }
        set areaSistemaId(val){
            sessionStorage.setItem('areaSistemaId', val);
        }
        get areaSistemaId(){
            if(sessionStorage.getItem('areaSistemaId')=="null")
                return null;
            else
                return sessionStorage.getItem('areaSistemaId');
        }
        get correo(){
            if(sessionStorage.getItem('correo')=="null")
                return null;
            else
                return sessionStorage.getItem('correo');
        }
   }

   @Injectable()
   export class ParameterService implements IParemeter {
    set estadoTransaccionAprobadoId(val){
        sessionStorage.setItem('estadoTransaccionAprobadoId', val);
    }
    get estadoTransaccionAprobadoId(){
        return sessionStorage.getItem('estadoTransaccionAprobadoId');
    }
    set estadoTransaccionRechazadoId(val){
        sessionStorage.setItem('estadoTransaccionRechazadoId', val);
    }
    get estadoTransaccionRechazadoId(){
        return sessionStorage.getItem('estadoTransaccionRechazadoId');
    }
    set estadoTransaccionEnviadoId(val){
        sessionStorage.setItem('estadoTransaccionEnviadoId', val);
    }
    get estadoTransaccionEnviadoId(){
        return sessionStorage.getItem('estadoTransaccionEnviadoId');
    }
    set estadoFirmaPendienteId(val){
        sessionStorage.setItem('estadoFirmaPendienteId', val);
    }
    get estadoFirmaPendienteId(){
        return sessionStorage.getItem('estadoFirmaPendienteId');
    }
    set estadoFirmaAprobadaId(val){
        sessionStorage.setItem('estadoFirmaAprobadaId', val);
    }
    get estadoFirmaAprobadaId(){
        return sessionStorage.getItem('estadoFirmaAprobadaId');
    }
    set estadoFirmaRechazadaId(val){
        sessionStorage.setItem('estadoFirmaRechazadaId', val);
    }
    get estadoFirmaRechazadaId(){
        return sessionStorage.getItem('estadoFirmaRechazadaId');
    }
   }