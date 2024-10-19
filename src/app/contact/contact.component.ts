import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    successMessage: string = '';
    isFlipped: boolean = false;
    isBorderVisible: boolean = false;
  
    constructor(private http: HttpClient) {}
  
    onSubmit(form: NgForm): void {
      if (form.invalid) {
        return;
      }
  
      const formData = {
        name: form.value.name,
        email: form.value.email,
        subject: form.value.subject,
        message: form.value.message
      };
  
      this.http.post('http://localhost:5000/api/enterprises', formData).subscribe(
        (response: any) => {
          this.successMessage = 'Message sent successfully!';
          
          setTimeout(() => {
            this.isFlipped = true;
            this.isBorderVisible = true;
          }, 1000);
  
          setTimeout(() => {
            form.resetForm(); // Reset the form after submission
            this.successMessage = '';
            this.isFlipped = false; // Flip back the card after success message
            this.isBorderVisible = false; // Hide border after success message
          }, 3000);
        },
        (error: any) => {
          console.error('Error submitting form:', error);
          alert('An error occurred while submitting the form. Please try again.');
        }
      );
    }
  
    toggleBorder(): void {
      this.isBorderVisible = !this.isBorderVisible;
    }
  }

