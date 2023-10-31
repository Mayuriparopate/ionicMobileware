import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { ImgswiperComponent } from './imgswiper/imgswiper.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { CardsComponent } from './cards/cards.component';





@NgModule({
  declarations: [HeaderComponent, ImgswiperComponent,FooterComponent,CardsComponent],
  imports: [ CommonModule, FormsModule, IonicModule],
  exports:[HeaderComponent, ImgswiperComponent,FooterComponent,CardsComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
  
})
export class SharedComponentModule { }
