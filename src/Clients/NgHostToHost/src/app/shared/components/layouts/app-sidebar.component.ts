import { Component, ViewEncapsulation,Input} from '@angular/core';
import { IOpcion } from '../../models/profile';
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
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {
  @Input() urls:IOpcion[];
  @Input() urlChilds:IOpcion[];
    constructor() {
      }
    sideBarMenuOnClick(e):void{
      var b = $("#sidebar").hasClass("menu-compact");
      var menuLink = $(e.target).closest("a");
      if (!menuLink || menuLink.length == 0)
          return;
      if (!menuLink.hasClass("menu-dropdown")) {
          if (b && menuLink.get(0).parentNode.parentNode == this) {
              var menuText = menuLink.find(".menu-text").get(0);
              if (e.target != menuText && !$.contains(menuText, e.target)) {
                  return;
              }
          }
          return;
      }
      var submenu = menuLink.next().get(0);
      if (!$(submenu).is(":visible")) {
          var c = $(submenu.parentNode).closest("ul");
          if (b && c.hasClass("sidebar-menu"))
              return;
          c.find("> .open > .submenu")
              .each(function () {
                  if (this != submenu && !$(this.parentNode).hasClass("active"))
                      $(this).slideUp(200).parent().removeClass("open");
              });
      }
      if (b && $(submenu.parentNode.parentNode).hasClass("sidebar-menu"))
          return;
      $(submenu).slideToggle(200).parent().toggleClass("open");
      return;
  }
}