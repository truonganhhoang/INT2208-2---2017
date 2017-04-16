import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';
import { MenuComponent } from './menu.component';
import { FooterComponent } from './footer.component';
import { De_ThiComponent } from './de_thi.component';
import { Lam_BaiComponent } from './lam_bai.component';
import { Xac_NhanComponent } from './xac_nhan.component';
import { Nop_BaiComponent } from './nop_bai.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent, 
                  MenuComponent, 
                  FooterComponent,
                  De_ThiComponent,
                  Lam_BaiComponent,
                  Xac_NhanComponent,
                  Nop_BaiComponent,
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
