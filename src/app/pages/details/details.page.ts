import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  constructor() { }

  isDarkMode: boolean = false;

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
  }


  activeLink: string = 'Mini Statement'; // Initialize activeLink to an empty string

  setActiveLink(link: string) {
    this.activeLink = link;
  }

  ngOnInit() {
  }

}
