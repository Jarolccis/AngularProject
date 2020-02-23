import { Component, OnInit,Input, Injectable } from '@angular/core';
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
  template:  `
  <div style='position: absolute;top: 0;left: 0;height:100%;width:100%;cursor: not-allowed;filter: alpha(opacity=60);background: #007bff;z-index: 201;' *ngIf="loading">
        <div style='padding:10% 50%' class='text-center'><div class="loader">
          
        </div>
    </div>
 `,
  styles: []
})
export class LoadingComponent { 
    @Input() loading = true;
    constructor(public router: Router) {
        router.events.subscribe((event: RouterEvent) => {
          this.navigationInterceptor(event)
        })
      }
    navigationInterceptor(event: RouterEvent): void {
      if (event instanceof NavigationStart) {
        this.loading = true
      }
      if (event instanceof NavigationEnd) {
        this.loading = false
      }
    
      // Set loading state to false in both of the below events to hide the spinner in case a request fails
      if (event instanceof NavigationCancel) {
        this.loading = false
      }
      if (event instanceof NavigationError) {
        this.loading = false
      }
    }
}