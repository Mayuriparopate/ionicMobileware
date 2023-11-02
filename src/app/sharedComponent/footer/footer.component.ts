import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  activetabs: any = 1;
  constructor() { }

  ngOnInit() {}
  tabs(val){
    this.activetabs  = val;
  }
  
}
