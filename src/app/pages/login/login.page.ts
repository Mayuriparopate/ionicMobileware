import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  errorMessage: string='';

  constructor(private formBuilder: FormBuilder, private router: Router,private authService: AuthenticationService) {
    
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required], // Initialize with a default value or null
      password: [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  login() {
    
    const usernameControl = this.loginForm.get('username');
    const passwordControl = this.loginForm.get('password');
  
    // if (usernameControl && passwordControl) {
    //   const username = usernameControl.value;
    //   const password = passwordControl.value;

    //   if (this.authService.authenticate(username, password)) {
    //     // Successful login, navigate to a different page
    //     console.log("welcome")
    //     this.errorMessage="";
    //     this.router.navigate(['/dashboard']);
      
    //   } else {
    //     // Display an error message if login fails
    //     this.errorMessage = 'Invalid username or password';
    //   }
  
    // }

  }

}
