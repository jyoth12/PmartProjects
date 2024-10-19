import { Component } from '@angular/core';

@Component({
  selector: 'app-wedges',
  standalone: true,
  imports: [],
  templateUrl: './wedges.component.html',
  styleUrl: './wedges.component.css'
})
export class WedgesComponent {
  cartCount: number = 0; // Counter to keep track of cart items
  isLiked: boolean = false;
  
    toggleLike() {
      this.isLiked = !this.isLiked;//heart icon
    }
  
    
    handleCartClick(): void {
      this.cartCount++; // Increment the cart count
    }
}
