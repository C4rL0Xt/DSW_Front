import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { LogoutPageComponent } from './pages/logout-page/logout-page/logout-page.component';
import { MenuComponent } from '../../components/menu/menu.component';



@NgModule({
  declarations: [
    AuthPageComponent,
    LogoutPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }
