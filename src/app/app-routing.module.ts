import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoPageComponent } from './modules/productos/pages/producto-page/producto-page.component';
import { DocumentsComponent } from './modules/productos/pages/documents/documents.component';
import { HomeProductoComponent } from './modules/productos/pages/home-producto/home-producto.component';

const routes: Routes = [
  {
  path:'',
  component: DocumentsComponent,
  loadChildren:() => import('./modules/productos/productos.module').then(m => m.ProductosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

