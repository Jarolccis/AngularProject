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
  selector: 'app-loading',
  templateUrl: './app-loading.component.html',
  styleUrls: ['./app-loading.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoadingComponent { 
    constructor() {
      }
}