import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  /*{
    path:'productos',
    component: ProductoPageComponent,
    loadChildren:() => import('../productos/productos.module').then(m => m.ProductosModule)
  }*/
 {
  path:'almacen',
  loadChildren:() => import('../productos/productos.module').then(m => m.ProductosModule)
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
