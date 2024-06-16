import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { MenuComponent } from './components/menu/menu.component';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http'
import { resourceInterceptor } from './modules/auth/interceptors/resource.interceptor';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, AuthorizedComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule],
  providers: [
    provideHttpClient(
      withInterceptors([resourceInterceptor])
    )
    //{provide: HTTP_INTERCEPTORS, useClass: resourceInterceptor, multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
