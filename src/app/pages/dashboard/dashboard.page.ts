import { Component, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/service/api-call/api-call.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor(private apiCallService: ApiCallService) {}
  res;

  message = 'Hello, World!';
  key = 'MySecretKey123';
  iv = '1234567890123456';
  encryptedMessage;
  decryptedMessage
  ngOnInit() {
    this.getData();
    this.encryptedMessage = this.apiCallService.encryptMessage(
      this.message,
      this.key,
      this.iv
    );
   // console.log(encryptedMessage + "encryptedMessage");
    this.decryptedMessage = this.apiCallService.decryptMessage(
      this.encryptedMessage,
      this.key,
      this.iv
    );

    //console.log(decryptedMessage + "decryptedMessage");
  }
  getData() {
    this.apiCallService.getData().subscribe((data) => {
      this.res = data;
      console.log(this.res);
    });
  }
}
