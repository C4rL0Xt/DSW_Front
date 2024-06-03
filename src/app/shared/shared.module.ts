import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';



@NgModule({
  declarations: [
    SideBarComponent,
    HeaderUserComponent,
    TabBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderUserComponent,
    SideBarComponent,
    TabBarComponent
  ]
})
export class SharedModule { }
