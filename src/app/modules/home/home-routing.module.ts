import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from '../admin/pages/admin-page/admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductoPageComponent } from '../productos/pages/producto-page/producto-page.component';
import { TesthomeComponent } from './pages/home-test/testhome/testhome.component';



const routes: Routes = [
  {
    path: 'user',
    component: TesthomeComponent,
    loadChildren: () => import('./home.module').then(m => m.HomeModule)
  }, {
    path: 'admin',
    component: AdminPageComponent,
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'productos',
    component: ProductoPageComponent,
    loadChildren: () => import('../productos/productos.module').then(m => m.ProductosModule)
  },
  {
    path: 'almacen',
    loadChildren: () => import('../productos/productos.module').then(m => m.ProductosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
