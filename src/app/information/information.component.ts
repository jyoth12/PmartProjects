import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent implements OnInit{
  descriptionText: string = '';

  checkDescription() {
    // This function will be called every time the user types in the textarea.
    // If descriptionText is not empty, the label will be hidden.
  }
  @ViewChild('formPopup') formPopup!: ElementRef<HTMLElement>;
  @ViewChild('blurBgOverlay') blurBgOverlay!: ElementRef<HTMLElement>;

  isPopupVisible = false;
  private apiUrl = 'http://localhost:5001/employees';  
  private email: string = '';

constructor(private http: HttpClient, private router: Router){

}
  ngOnInit(): void {
   
  }

  showPopup(): void {
    this.formPopup.nativeElement.style.display = 'block';
    this.blurBgOverlay.nativeElement.style.display = 'block';
    this.isPopupVisible = true;
  }

  hidePopup(): void {
    this.formPopup.nativeElement.style.display = 'none';
    this.blurBgOverlay.nativeElement.style.display = 'none';
    this.isPopupVisible = false;
    this.router.navigateByUrl('/'); 
  }


  info(event: Event): void {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;


    const formData = { name, email, phone };
    console.log('Sending data for first submission:', formData);
    this.http.post(this.apiUrl, formData).subscribe(
      (response: any) => {
        console.log('Information submitted successfully!', response);
        this.info1(); 
      },
      (error: any) => {
        console.error('Error submitting information:', error);
      }
    );
  }


  handleinfo1Submit(event: Event): void {
    event.preventDefault();
    const company = (document.getElementById("company") as HTMLInputElement).value;
    const description = (document.getElementById("description") as HTMLTextAreaElement).value;
    const policy = (document.getElementById("policy") as HTMLInputElement).checked;


    const email = (document.getElementById("email") as HTMLInputElement).value;

    const formData = { company, description, policy, email };
    console.log('Sending data for second submission:', formData);
    this.http.post(this.apiUrl, formData).subscribe(
      (response: any) => {
        console.log('Additional information submitted successfully!', response);
        this.hidePopup(); 
      },
      (error: any) => {
        console.error('Error submitting additional information:', error);
      }
    );
  }





  info1(): void {
    const before1 = document.getElementById("before1");
    const after1 = document.getElementById("after1");

    if (before1 && after1) {
      before1.style.display = "none";
      after1.style.display = "flex";
    }
    else {
      console.error('Could not find elements with IDs before1 or after1');
    }
  }


}