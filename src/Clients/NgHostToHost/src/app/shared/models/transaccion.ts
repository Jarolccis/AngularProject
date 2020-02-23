import {Cuenta} from "./cuenta";
export class Transaccion{
    
    TransaccionId:string;
    TipoOperacionId:string;
    OperacionId:string;
    CuentaOrigenId:string;
    CuentaDestinoId:string;
    MonedaId:string;
    EstadoId:string;
    UsuarioId:string;

    FechaIngreso:Date;
    Fecha:Date;
    NumeroSAP:string;
    Importe:number;
    
    TipoOperacion:string;
    Estado:string;
    Moneda:string;

    FirmaFecha:Date;
    FirmaEstadoId:String;
    FirmaEstado:String;

    CuentaOrigen:Cuenta;
    CuentaDestino:Cuenta;
}