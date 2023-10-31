import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConstantsService } from 'src/app/service/constants/constants.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent  implements OnInit {
  @Input() title: string;
 
  cardBlock:any=[];
  constructor(private constant:ConstantsService) { }

  ngOnInit() {
    this.cardBlock = this.constant.blocks
  }


  // isClass1Visible = false;

  // toggleClass() {
  //   this.isClass1Visible = !this.isClass1Visible;
  // }
 
  @Output() toggleClassEvent = new EventEmitter<void>(); // Renamed the @Output() property

  isChevronDownVisible = true;
  toggleClass() {
    console.log('Toggle method called');
    this.isChevronDownVisible = !this.isChevronDownVisible;
    this.toggleClassEvent.emit();
  }
}
