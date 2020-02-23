import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

/*BASE Shared Services*/
import { ProfileService } from '../../shared/services/profile.service';
import { AuthService } from '../../shared/services/auth.service';

/*BASE Shared Guards */
import { AuthGuard } from '../../shared/guards/auth.guard';

/*App Components*/
import { HomeComponent } from './home.component';
import { TransaccionComponent } from '../transaccion/transaccion.component';
import { TransaccionModalComponent } from '../transaccion/transaccion-modal/transaccion-modal.component';
import { FirmaComponent } from '../firma/firma.component';

/*Shared Services*/
import {TransaccionService} from '../../shared/services/transaccion.service'

/*Shared Modules*/
import { HomeRoutingModule } from './home-routing.module';
import { AppBoostrapModule } from '../../shared/modules/app-boostrap.module';

/*Shared Components Models*/
import { ConfirmModalComponent } from '../../shared/components/modals/app-confirm-modal.component';
import { ErrorModalComponent } from '../../shared/components/modals/app-error-modal.component';
import { OkModalComponent } from '../../shared/components/modals/app-ok-modal.component';
import { LoadingComponent } from '../../shared/components/modals/app-loading.component';

/*Shared Components Layouts*/
import { BreadcrumbsComponent } from '../../shared/components/layouts/app-breadcrumbs.component';
import { SidebarComponent } from '../../shared/components/layouts/app-sidebar.component';
import { ChatBarComponent } from '../../shared/components/layouts/app-chatbar.component';
import { NavbarComponent } from '../../shared/components/layouts/app-navbar.component';
import { HeaderComponent } from '../../shared/components/layouts/app-header.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    AppBoostrapModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HomeComponent,
    ConfirmModalComponent,
    OkModalComponent,
    ErrorModalComponent,
    LoadingComponent,
    NavbarComponent,
    SidebarComponent,
    ChatBarComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    FirmaComponent,
    TransaccionComponent,
    TransaccionModalComponent
  ],
  providers:[
    AuthService,
    AuthGuard,
    ProfileService,
    TransaccionService
  ]
})
export class HomeModule {}