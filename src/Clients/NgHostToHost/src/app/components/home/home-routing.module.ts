import { NgModule }             from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError,RouterModule, Routes
} from '@angular/router'

import { HomeComponent } from    './home.component';
import { FirmaComponent } from '../../components/firma/firma.component';
import { TransaccionComponent } from '../../components/transaccion/transaccion.component';

import { AuthGuard } from '../../shared/guards/auth.guard';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate:  [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild:  [AuthGuard],
        children: [
          { path: 'Firma/:id', component: FirmaComponent },
          { path: 'Transaccion/:id', component: TransaccionComponent }          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {
  
  loading = true;
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
  
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }
}