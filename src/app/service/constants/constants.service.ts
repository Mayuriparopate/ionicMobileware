import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  public url: any = "https://jsonplaceholder.typicode.com"; 
  blocks: { imageUrl: string; text: string }[] = [
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'Contact us'
    },
    {
      imageUrl: '../../../assets/images/thumb.png',
      text: 'Apply for Loan'
    },
    {
      imageUrl: '../../../assets/images/userlogo.png',
      text: 'Quick view balance'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'Digital Account Opening'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'UPI'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'More...'
    },
    {
      imageUrl: '../../../assets/images/userlogo.png',
      text: 'Quick view balance'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'Digital Account Opening'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'UPI'
    },
    {
      imageUrl: '../../../assets/images/upi.png',
      text: 'More...'
    }
  ];
  constructor() { }
}
