import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flats.component.html',
  styleUrl: './flats.component.css'
})
export class FlatsComponent {
  cartCount: number = 0; // Counter to keep track of cart items
isLiked: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;//heart icon
  }

  
  handleCartClick(): void {
    this.cartCount++; // Increment the cart count
  }

}
