import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoPageComponent } from './pages/producto-page/producto-page.component';

const routes: Routes = [
  {
  path:"",
  component: ProductoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
