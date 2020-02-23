import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder,NgForm } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Usuario } from '../../shared/models/usuario';
import {
  Router,
  NavigationExtras
} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{
  user: Usuario;
  message: string;
  loginForm: FormGroup;
  isLoading = false;
  isError=false;
  constructor(public authService: AuthService, public router: Router) {
    this.user=new Usuario();
    //this.user.Usuario="JarolCC";
    //this.user.Password="JarolCC";
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl(this.user.Usuario, [
        Validators.required,
        Validators.minLength(1) ]),
      password: new FormControl(this.user.Password, [
          Validators.required,
          Validators.minLength(1) ])
    });
  }
    get usuario() { return this.loginForm.get('usuario'); }
    get password() { return this.loginForm.get('password'); }
      
  
    setMessage() {
    }
  
    login(lgForm :FormGroup) {
 
  
      if(!lgForm.invalid){
        this.isLoading=true;
       
        this.authService.login(lgForm.value.usuario,lgForm.value.password).subscribe(() => {
          this.setMessage();
          if (this.authService.isLoggedIn) {
            let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
            let navigationExtras: NavigationExtras = {
              queryParamsHandling: 'preserve',
              preserveFragment: true
            };      
            this.router.navigate([redirect], navigationExtras);
          } else  {
            this.isError=true;
            this.isLoading=false;
          }
        });
      }
    }
  
    logout() {
      this.authService.logout();
      this.setMessage();
    }
}