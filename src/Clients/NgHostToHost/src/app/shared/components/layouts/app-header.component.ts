import { Component, ViewEncapsulation} from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,NavigationExtras
} from '@angular/router'
import * as $ from 'jquery';
@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent { 
    constructor() {
      }
      fullScreenOnClick():void{
        var element = document.documentElement;
        if (!$('body')
            .hasClass("full-screen")) {

            $('body')
                .addClass("full-screen");
            $('#fullscreen-toggler')
                .addClass("active");
            if (element.requestFullscreen) {
                element.requestFullscreen();
            // } else if (element.mozRequestFullScreen) {
            //     element.mozRequestFullScreen();
            } else if (element.webkitRequestFullscreen) {
                element.webkitRequestFullscreen();
            } 
            // else if (element.msRequestFullscreen) {
            //     element.msRequestFullscreen();
            // }

        } else {

            $('body').removeClass("full-screen");
            $(".fullscreen").removeClass("active");

            if (document.exitFullscreen) {
                document.exitFullscreen();
            // } else if (document.mozCancelFullScreen) {
            //     document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }

        }
      }
      refreshOnClick():void{
        
       var r= Router;
      }
      expandOnClick():void{
          $("#sidebar").toggleClass("hide");
          $(".sidebar-toggler").toggleClass("active");
      }
}