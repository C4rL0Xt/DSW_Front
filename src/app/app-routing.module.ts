import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/pages/auth-page/auth-page.component';
import { HomeComponent } from './components/home/home.component';
import { AdminPageComponent } from './modules/admin/pages/admin-page/admin-page.component';
import { LogoutPageComponent } from './modules/auth/pages/logout-page/logout-page/logout-page.component';
import { TesthomeComponent } from './modules/home/pages/home-test/testhome/testhome.component';

const routes: Routes = [
  {
    path: 'user',
    component: HomePageComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'authorized', component: AuthPageComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: 'admin',
    component: AdminPageComponent,
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }, {
    path: 'logout',
    component: LogoutPageComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }, {
    path: '',
    component: TesthomeComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
