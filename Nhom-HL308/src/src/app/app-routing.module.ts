import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent }   from './menu.component';
import { De_ThiComponent }      from './de_thi.component';
import { Lam_BaiComponent }  from './lam_bai.component';
import { Xac_NhanComponent }  from './xac_nhan.component';
import { Nop_BaiComponent } from './nop_bai.component';

const routes: Routes = [
  { path: '', redirectTo: '/de_thi', pathMatch: 'full' },
  { path: 'de_thi',  component: De_ThiComponent },
  { path: 'lam_bai',     component: Lam_BaiComponent },
  { path: 'xac_nhan',     component: Xac_NhanComponent },
  { path: 'nop_bai',     component: Nop_BaiComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
