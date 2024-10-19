import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footware',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './footware.component.html',
  styleUrl: './footware.component.css'
})
export class FootwareComponent {
 
}
