
import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http';
export class Global {
    public static AuthUrl = 'http://localhost:51709/api/account/login/';
   //public static AuthUrl = 'http://localhost:51709/api/pais/';
    
    public static TransaccionUrl = 'http://localhost:3000/transacciones/';
    public static FirmaUrl = 'http://localhost:3000/firmas/';

    //PRD
    // public static AuthUrl = 'http://10.20.20.108/WS_SIGREQ/api/Auth/';
    // public static RenUrl = 'http://10.20.20.108/WS_SIGREQ/api/REN/';
    // public static ActividadUrl = 'http://10.20.20.108/WS_SIGREQ/api/Actividad/';
    // public static GeneralUrl = 'http://10.20.20.108/WS_SIGREQ/api/General/';
    // public static AreaSistemaUrl = 'http://10.20.20.108/WS_SIGREQ/api/AreaSistema';
    // public static UNUrl = 'http://10.20.20.108/WS_SIGREQ/api/UN';
    // public static SociedadUrl = 'http://10.20.20.108/WS_SIGREQ/api/Sociedad';
    // public static UserADUrl = 'http://10.20.20.108/WS_SIGREQ/api/UserAD/';
    // public static UsuarioUrl = 'http://10.20.20.108/WS_SIGREQ/api/Usuario/';
    static handleFullError(error: Response) {
        return Observable.throw(error);
    }

    static handleError(error: Response): Observable<any> {
        let errorMessage = error.json();
        console.error(errorMessage);
        return Observable.throw(errorMessage.error || 'Server error');
    }
}