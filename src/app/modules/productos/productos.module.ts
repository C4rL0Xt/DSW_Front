import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeProductoComponent } from './pages/home-producto/home-producto.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductoPageComponent,
    DocumentsComponent,
    HomeProductoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProductosModule { }
