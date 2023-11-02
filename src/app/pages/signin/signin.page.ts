import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  selectedTab: string = 'mPIN';
  customerId: string = '';
  password: string = '';
  mPIN: string[] = ['', '', '', '', '', ''];
  selectedMPIN: number = 0;

  public t1: any;
  public t2: any;
  public t3: any;
  public t4: any;
  public t5: any;
  public t6: any;

  
 
  @ViewChild('key1', { static: false }) otp1;
  @ViewChild('key5', { static: false }) otp5;
  @ViewChild('key6', { static: false }) otp6;
 
  public otpCount: number;
  OTP: string[] = ['', '', '', '', '', ''];

  loginForm: FormGroup;
  errorMessage: string='';
  mpinError:string='';
  constructor(private router: Router,private authService: AuthenticationService,public toastController: ToastController,private formBuilder: FormBuilder,) {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required], // Initialize with a default value or null
      password: [null, Validators.required]
    });
    this.loginForm.get('username').valueChanges.subscribe(value => {
      
      console.log('Username value:', value);
      if(value == ""){
        this.errorMessage ="";
      }
    });
      this.loginForm.get('password').valueChanges.subscribe(value => {
        if(value == ""){
          this.errorMessage ="";
        }
  });
   }

  ngOnInit() {
    
  }


  
  checkEvent() {
    var t = this.t1 + "";
    var temp = t.split('');
  
    if (temp.length == 6) {
      this.t1 = parseInt(temp[0])
      this.t2 = parseInt(temp[1])
      this.t3 = parseInt(temp[2])
      this.t4 = parseInt(temp[3])
      this.t5 = parseInt(temp[4])
      this.t6 = parseInt(temp[5])
      this.otp6.setFocus();
    }

    if ((this.t1 + "" + this.t2 + this.t3 + this.t4 + this.t5 + this.t6).length == 6) {
     this.next();
      return true;
    }
    else {
      
      return false;
    }
  }

next(){
 if(this.t1 + "" + this.t2 + this.t3 + this.t4 + this.t5 + this.t6 === '123456'){
  this.router.navigate(['/dashboard']);
 }else{
  this.mpinError="Please enter valid MPIN"
 }
}
countChange(event) {
  event.target.value = event.target.value.replace(/[^0-9]*/g, '');
}

  selectTab(tab: string) {
    this.selectedTab = tab;
    
  }

  register(){
    // Implement your register logic here
  }

 

  otpController(event, next, prev, index?) {
    if (index == 6) {
        console.log("submit");
        return; // This is a valid return statement
    }

    if (event.target.value.length < 1 && prev) {
        prev.setFocus();
        return; // This is a valid return statement
    } else if (next && event.target.value.length > 0) {
        next.setFocus();
        return; // This is a valid return statement
    }
    // If none of the conditions are met, you can choose to return or not.
    // If you don't want to return anything, you can omit the return statement.
    // If you want to return something for all cases, you can add a default return statement.
}


login() {
    
  const usernameControl = this.loginForm.get('username');
  const passwordControl = this.loginForm.get('password');

  if (usernameControl && passwordControl) {
    const username = usernameControl.value;
    const password = passwordControl.value;

    if (this.authService.authenticate(username, password)) {
      // Successful login, navigate to a different page
      console.log("welcome")
      this.errorMessage="";
      this.router.navigate(['/dashboard']);
    
    } else {
      // Display an error message if login fails
      this.errorMessage = 'Invalid username or password';
    }

  }

}

}




