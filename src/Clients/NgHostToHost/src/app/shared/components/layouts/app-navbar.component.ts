import { Component, ViewEncapsulation,Output, EventEmitter} from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import * as $ from 'jquery';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,NavigationExtras
} from '@angular/router'
@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent {
    nombres:string;
    correo:string;
    @Output() public logout=new EventEmitter();
    public exitApp() {
      this.logout.emit();
    }
    constructor(private _profileService:ProfileService) {
        this.nombres=_profileService.nombres; 
        this.correo=_profileService.correo;
      }
      onClic():void{
        if (!$('#sidebar').is(':visible'))
        $("#sidebar").toggleClass("hide");
        $("#sidebar").toggleClass("menu-compact");
        $(".sidebar-collapse").toggleClass("active");
        var isCompact = $("#sidebar").hasClass("menu-compact");
    
        if ($(".sidebar-menu").closest("div").hasClass("slimScrollDiv")) {
            // $(".sidebar-menu").slimScroll({ destroy: true });
            $(".sidebar-menu").attr('style', '');
        }
        if (isCompact) {
            $(".open > .submenu")
                .removeClass("open");
        } else {
            if ($('.page-sidebar').hasClass('sidebar-fixed')) {
                // var position = (readCookie("rtl-support") || location.pathname == "/index-rtl-fa.html" || location.pathname == "/index-rtl-ar.html") ? 'right' : 'left';
                // $('.sidebar-menu').slimscroll({
                //     height: $(window).height() - 90,
                //     position: 'left',
                //     size: '3px',
                //     color: $(".navbar-inner").css("color")
                // });
            }
        }
    //Slim Scroll Handle
      }
      chatLinkOnClic():void{
        $('.page-chatbar').toggleClass('open');
        $("#chat-link").toggleClass('wave').toggleClass('in');
        $("#chat-link").parent().toggleClass('open');
      }
      settingOnClic():void{ 
          $('.navbar-account').toggleClass('setting-open');
      }
      loginAreaOnClic():void{
          var dd=$(".login-area");
          var d=$(".login-area").parent('li');
          if($(".dropdown-login-area").css('display')=="none"){
                $(".login-area").parent('li').toggleClass("open");
            } else
                $(".login-area").parent('li').removeClass("open")
            }
}