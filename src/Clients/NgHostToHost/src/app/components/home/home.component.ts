import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

import { ProfileService } from '../../shared/services/profile.service';
import { AuthService } from '../../shared/services/auth.service';
import { IOpcion } from '../../shared/models/profile';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  isCollapsed: boolean = false;
  nombreCompleto:string;
  sociedad:string;
  rol:string;
  opciones:IOpcion[];
  childs:IOpcion[];
  settings = {
    skin: '',
    color: {
        themeprimary: '#2dc3e8',
        themesecondary: '#fb6e52',
        themethirdcolor: '#ffce55',
        themefourthcolor: '#a0d468',
        themefifthcolor: '#e75b8d'
    },
    rtl: false,
    fixed: {
        navbar: true,
        sidebar: true,
        breadcrumbs: true,
        header: true
    }
};
  constructor(private _profileService:ProfileService,private _authService:AuthService){
    this.nombreCompleto=_profileService.apellidos+", "+_profileService.nombres;
    this.sociedad=_profileService.sociedad;
    this.rol=_profileService.rol;
    this.opciones=_profileService.opciones;
    this.childs=_profileService.opciones;
  }
   collapsed(event: any): void {
     console.log(event);
   }
  
   expanded(event: any): void {
     console.log(event);
   }
   exitApp():void{
this._authService.logout();
   }
   onClic():void{
    if (!$('#sidebar').is(':visible'))
    $("#sidebar").toggleClass("hide");
    $("#sidebar").toggleClass("menu-compact");
    $(".sidebar-collapse").toggleClass("active");
    var isCompact = $("#sidebar").hasClass("menu-compact");

    if ($(".sidebar-menu").closest("div").hasClass("slimScrollDiv")) {
        $(".sidebar-menu").slimScroll({ destroy: true });
        $(".sidebar-menu").attr('style', '');
    }
    if (isCompact) {
        $(".open > .submenu")
            .removeClass("open");
    } else {
        if ($('.page-sidebar').hasClass('sidebar-fixed')) {
            $('.sidebar-menu').slimscroll({
                height: $(window).height() - 90,
                position: 'left',
                size: '3px',
                color: $(".navbar-inner").css("color")
            });
        }
    }
  }
}
