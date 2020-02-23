export interface IProfile {
    token: string;
    expiration: string;
    usuario:string;
    rolId:string;
    unId:string;
    nombreCorporativo:string;
    nombres:string;
    apellidos:string;
    rol:string;
    sociedad:string;
    parameter:IParemeter;
    opciones:IOpcion[];
    areaSistemaId?:string;
    correo:string;
}
export interface IParemeter{
    estadoTransaccionAprobadoId:string;
    estadoTransaccionRechazadoId:string;
    estadoTransaccionEnviadoId:string;
    estadoFirmaPendienteId:string;
    estadoFirmaAprobadaId:String;
    estadoFirmaRechazadaId:string;
}
export interface IOpcion{
    opcionId:string;
    padreId:string;
    url:string;
}