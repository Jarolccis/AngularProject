import { Component, ViewEncapsulation} from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,NavigationExtras
} from '@angular/router'
@Component({
  selector: 'app-chatbar',
  templateUrl: './app-chatbar.component.html',
  styleUrls: ['./app-chatbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatBarComponent { 
    constructor() {
      }
}