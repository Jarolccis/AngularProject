import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { HomeModule } from './components/home/home.module';

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {   
        path: 'home',
        loadChildren: ()=>HomeModule, 
        canLoad:  [AuthGuard]
    },
     { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        {
          enableTracing: true, // <-- solo depuración  
        }
      )
    ],
    exports: [
      RouterModule
    ],
    providers: [
      //CanDeactivateGuard,
      //SelectivePreloadingStrategy
    ]
  })
  export class AppRoutingModule { }
  