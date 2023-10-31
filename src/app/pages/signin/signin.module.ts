import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { CardsComponent } from 'src/app/sharedComponent/cards/cards.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentModule } from "../../sharedComponent/shared-component.module";

@NgModule({
    declarations: [SigninPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        SigninPageRoutingModule,
        SharedComponentModule
    ]
})
export class SigninPageModule {}
