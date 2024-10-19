import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cookiesservices',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './cookiesservices.component.html',
  styleUrl: './cookiesservices.component.css'
})
export class CookiesservicesComponent {
  
}
