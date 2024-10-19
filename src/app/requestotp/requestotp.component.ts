import { Component } from '@angular/core';

@Component({
  selector: 'app-requestotp',
  standalone: true,
  imports: [],
  templateUrl: './requestotp.component.html',
  styleUrl: './requestotp.component.css'
})
export class RequestotpComponent {
    showLoginForm: boolean = false;
    emailOrMobile: string = '';
    showOTPForm: boolean = true; // Add this property

    requestOTP() {
      this.showOTPForm = true;
    }
  }
  
  
  

