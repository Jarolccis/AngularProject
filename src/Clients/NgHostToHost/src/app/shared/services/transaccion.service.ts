import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {AuthService} from './auth.service';
import {Observable} from 'rxjs/Rx';
import {Global} from '../global';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http: Http,private _authService: AuthService) { }
  listar(criteria: any): Observable<any> {

    let criteriaTemp=JSON.parse(JSON.stringify(criteria));
        for (var key in criteriaTemp) {
          if (criteriaTemp.hasOwnProperty(key)) {
              if(criteriaTemp[key]==null)
                delete criteriaTemp[key]
          }
        }
    return this._http.get(Global.TransaccionUrl,{params:JSON.parse(JSON.stringify(criteriaTemp)), headers: this._authService.getAuthenticationHeader() })
          .map((response: Response) => <any>response.json())
          .catch((response: Response) =>this.handleErrorAuth(response,this._authService));
  }
  handleErrorAuth(error: Response,auth:AuthService) {
    if (error.status === 401 || error.status === 403)
        auth.logout();
    return Observable.throw(error);
}
}
