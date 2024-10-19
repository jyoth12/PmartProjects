import { Component } from '@angular/core';

@Component({
  selector: 'app-glasses',
  standalone: true,
  imports: [],
  templateUrl: './glasses.component.html',
  styleUrl: './glasses.component.css'
})
export class GlassesComponent {
  cartCount: number = 0; // Counter to keep track of cart items
  isLiked: boolean = false;
  
    toggleLike() {   
      this.isLiked = !this.isLiked;//heart icon
    }
  
    
    handleCartClick(): void {
      this.cartCount++; // Increment the cart count
    }
    
}
