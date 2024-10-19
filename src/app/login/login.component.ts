
import { Component, AfterViewInit, Renderer2, ElementRef,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements  AfterViewInit {
  email: string = '';
  password: string = '';
  confirmPassword: string = ''; 
  currentForm: 'Otp'| 'signin'|'login' | 'signup' | 'Forget' | 'Reset' | null = null;
  buttonState: 'default' | 'clicked' = 'default';
  isPasswordVisible: boolean = false;
  username: string = '';
  otp: string = ''; 
  newPassword: string = ''; 
  confirmNewPassword: string = '';
  ResetPassword:string='';
  successMessage: string = '';
  errorMessage: string = '';
  showIcons: boolean = false;


  private adminEmail: string = 'admin@gmail.com';
  private adminPassword: string = '12345';


  constructor(private renderer: Renderer2, private el: ElementRef, private http: HttpClient, private router: Router) {}



  ngAfterViewInit(): void {
    const images = this.el.nativeElement.querySelectorAll('.bounce-image');
    const initialText = this.el.nativeElement.querySelector('#initialText');

    setTimeout(() => {
      this.renderer.addClass(initialText, 'hidden'); 
      images.forEach((img: HTMLElement, index: number) => {
        setTimeout(() => {
          this.renderer.addClass(img, 'rotateIn'); 
          if (index === images.length - 1) {
            this.triggerRectangleAnimations(); 
          }
        }, index * 500); 
      });
    }, 4500); 

    // Trigger button animations after page load
    setTimeout(() => {
      this.triggerButtonAnimations();
    }, 1000); // 1-second delay after page load
  }

  triggerRectangleAnimations(): void {
    const rectangles = this.el.nativeElement.querySelectorAll('.rectangle-container');
    rectangles.forEach((rect: HTMLElement, index: number) => {
        setTimeout(() => {
            this.renderer.addClass(rect, 'visible'); 
        }, (index + 1) * 500);
    });
  }

  triggerButtonAnimations(): void {
    const buttons = this.el.nativeElement.querySelectorAll('.form-buttons button');
    buttons.forEach((button: HTMLElement, index: number) => {
      setTimeout(() => {
        this.renderer.addClass(button, 'visible');
      }, (index + 1) * 500); 
    });
  }

  showForm(formId: string): void {
    const formElement = this.el.nativeElement.querySelector('#${formId}');
    if (formElement) {
      this.renderer.setStyle(formElement, 'display', 'block');
      this.renderer.addClass(formElement, 'bounce-in');
    }
  }

  onSubmit(): void {
    const submitGif = this.el.nativeElement.querySelector('#submitGif');
    
    if (submitGif) {
      this.renderer.removeClass(submitGif, 'hidden'); 
      this.renderer.addClass(submitGif, 'visible');
  
      setTimeout(() => {
        this.renderer.removeClass(submitGif, 'visible');
        this.renderer.addClass(submitGif, 'hidden'); 
      }, 2000); 
    }
  }

  displayContent(formType:|'Otp'| 'signin'|'login' | 'signup' | 'Forget' | 'Reset'): void {
    this.currentForm = formType;
    this.clearMessages();
    this.clearForm();
  }

  closeForm(): void {
    this.currentForm = null;
  }

  onSubmitSignIn(): void {
    const userData = { email: this.email, password: this.password };

    // Check if the login credentials match the admin's credentials
    if (userData.email === this.adminEmail && userData.password === this.adminPassword) {
      // Redirect to admin dashboard
      this.router.navigate(['/admin']);
    }else{
    this.http.post('http://localhost:9000/api/signin', userData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      (error: any) => {
        this.errorMessage = error.error.message;
      }
    );
  }
  }

  onSubmitSignUp(): void {

    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords don't match!";
      return;
    }

    const userData = { username: this.username, email: this.email, password: this.password };
    this.http.post('http://localhost:9000/api/signup', userData).subscribe(
      (response: any) => {
        this.successMessage = response.message;
        this.currentForm = 'login'; 
      },
      (error: any) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  onSubmitForget(): void {
    this.http.post('http://localhost:9000/api/Forget', { email: this.email }).subscribe(
      (response: any) => {
       
        this.currentForm = 'Otp';  
      },
      (error: any) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  onSubmitOtp(): void {
    
    this.http.post('http://localhost:9000/api/Otp', {  otp: this.otp }).subscribe(
      (response: any) => {
       
        this.currentForm = 'Reset';  
      },
      (error: any) => {
        this.errorMessage = error.error.message;
      }
    );
  }
  // onSubmitNewPassword(form: NgForm): void {
  //   console.log('New Password Form Data:', form.value);
    // Handle forget password logic here
  // }
  onSubmitReset(): void {
    const resetData = { email: this.email, otp: this.otp, newPassword: this.newPassword,confirmNewPassword: this.confirmNewPassword };
    this.http.post('http://localhost:9000/api/Reset', resetData).subscribe(
      (response: any) => {
        this.successMessage = response.message;
        this.currentForm = 'login';  
      },
      (error: any) => {
        this.errorMessage = error.error.message;
      }
    );
  }

  onButtonClick(): void {
    console.log('Button clicked!');
   
  }

  // togglePasswordVisibility(): void {
  //   console.log('Eye icon clicked'); // Debugging line
  //   this.isPasswordVisible = !this.isPasswordVisible;
  // }

  // toggleIcons(): void {
  //   this.showIcons = !this.showIcons;
  // }

  clearForm(): void {
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.username = '';
    this.otp = '';
    this.newPassword = '';
    this.confirmNewPassword = '';
  }

  clearMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

  

}

