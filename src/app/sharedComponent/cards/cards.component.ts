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
 
  @Output() toggleDashboard = new EventEmitter<boolean>();
  isChevronDownVisible = true;

  // toggleClass() {
  //   this.isChevronDownVisible = !this.isChevronDownVisible;
  // }

  toggleChevron(isDown: boolean) {
    this.isChevronDownVisible = !this.isChevronDownVisible;
    this.toggleDashboard.emit(isDown);
  }
}
