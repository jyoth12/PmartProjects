import { Component } from '@angular/core';

@Component({
  selector: 'app-heels',
  standalone: true,
  imports: [],
  templateUrl: './heels.component.html',
  styleUrl: './heels.component.css'
})
export class HeelsComponent {
  cartCount: number = 0; // Counter to keep track of cart items
isLiked: boolean = false;

  toggleLike() {
    this.isLiked = !this.isLiked;//heart icon
  }

  
  handleCartClick(): void {
    this.cartCount++; // Increment the cart count
  }

}
