
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cookies',
  standalone: true,
  imports:[CommonModule,RouterLink],
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {
  consentVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.consentVisible = true;
  }

  handleAccept(): void {
    console.log('Cookies accepted');
    this.consentVisible = false; 
  }

  handleDecline(): void {
    console.log('Cookies declined');
    this.consentVisible = false; 
  }
}


  
 

































































































































































































