import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './components/home/home-routing.module';
import { HomeModule } from './components/home/home.module';

import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';

import { AuthGuard } from './shared/guards/auth.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HomeModule,
    HomeRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
