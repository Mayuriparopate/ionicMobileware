import { Component } from '@angular/core';
import { LanguageService } from './service/common/language.service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private languageTranslate: LanguageService) {
    this.initializeApp();
  }

  initializeApp() {

   
    this.languageTranslate.setInitialAppLang();
  }
}
