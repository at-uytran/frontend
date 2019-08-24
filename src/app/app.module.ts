import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HTTP
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { NotificationModule } from './notification/notification.module';


import { HeaderComponent } from './header/header.component'

import { Subscription } from 'rxjs';

// Action cable
import { ActionCableService, Channel } from 'angular2-actioncable';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    NotificationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],  providers: [ActionCableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
