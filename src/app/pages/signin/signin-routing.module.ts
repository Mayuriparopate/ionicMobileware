import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninPage } from './signin.page';
import { SharedComponentModule } from 'src/app/sharedComponent/shared-component.module';

const routes: Routes = [
  {
    path: '',
    component: SigninPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedComponentModule],
  exports: [RouterModule],
})
export class SigninPageRoutingModule {}
