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
  selector: 'app-breadcrumbs',
  templateUrl: './app-breadcrumbs.component.html',
  styleUrls: ['./app-breadcrumbs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbsComponent { 
  subTitles:string[]=[];
    constructor(private router: Router ) {
      let parentText:string;
      console.log("LEONEL ROJAS");
      parentText=this.router.url.split("/")[0];
      console.log(parentText);
      this.router.url.split("/").forEach(item => {
        console.log("LEONEL");
        if(item!=parentText)
          this.subTitles.push(item);
      });
    }
}