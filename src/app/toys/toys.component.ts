import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toys',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toys.component.html',
  styleUrl: './toys.component.css'
})
export class ToysComponent {
}
