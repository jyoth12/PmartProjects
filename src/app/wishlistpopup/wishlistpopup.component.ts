import { Component } from '@angular/core';

@Component({
  selector: 'app-wishlistpopup',
  standalone: true,
  imports: [],
  templateUrl: './wishlistpopup.component.html',
  styleUrl: './wishlistpopup.component.css'
})
export class WishlistpopupComponent {
  showLoginPopup() {
    this.showLoginForm = true;
  }
  
  hideLoginPopup() {
    this.showLoginForm = false;
  }
  
  toggleAdditionalContent(product: { showAdditionalContent: boolean; }) {
    product.showAdditionalContent = !product.showAdditionalContent;
  }
  
  closeAdditionalContent(product: { showAdditionalContent: boolean; }) {
    product.showAdditionalContent = false;
  }
  addToCart(product: Product) {
    // Implement your add to cart logic here
  }
}
