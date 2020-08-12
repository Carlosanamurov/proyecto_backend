import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Producto/listar/listar.component';
import { AddComponent } from './Producto/add/add.component';
import { EditComponent } from './Producto/edit/edit.component';
import{ ServiceService}from '../app/Service/service.service';
import{HttpClientModule}from '@angular/common/http';
import{ FormsModule}  from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
