
import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';



interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  description: string;
  options: { imageUrl: string }[];
  colors: {
    backgroundColor: string;
    imageUrl: string;
    active: boolean;
    optionImages: { imageUrl: string }[];
  }[];
  size: { label: string; active: boolean; price: string; description: string }[];
  Thickness: { label: string; active: boolean; price: string; description: string }[];
  Dimension: { label: string; active: boolean; price: string; description: string }[];
  showAdditionalContent: boolean;
  quantity: number;
  screenSize: string;
  selectedSize?: string; // Add this property
}

@Component({
  selector: 'app-slidebar',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink], // Add ModalComponent here
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {
  selectedProduct: any;
  menuOpen = false;
  scrolled = false;
  isSearchVisible = false;
  sidebarOpen = false;
  product: Product | undefined;
  cartItems: any;
  removeCartItem: any;
  quantityChanged: any;
  totalCost!: number;
  isModalOpen = false;
  modalImageSrc: string = '';

  constructor(public cartService: CartService) {}

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

  buyButtonClicked() {
    // Implement logic for buying items from the cart
  }
  emptyButtonClicked() {
    // Implement logic for buying items from the cart
  }

  updateCartItem(item: any) {
    // Update cart item quantity
    this.cartService.updateCartItem(item);
  }

  get cartItemCount(): number {
    return this.cartService.getCartItemCount();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.getElementById('navbar');

    if (this.menuOpen) {
      menuIcon?.classList.remove('bi-list');
      menuIcon?.classList.add('bi-x');
      navbar?.classList.add('mobile-menu');
    } else {
      menuIcon?.classList.remove('bi-x');
      menuIcon?.classList.add('bi-list');
      navbar?.classList.remove('mobile-menu');
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const changePosition = 50;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrolled = scrollPosition >= changePosition;
  }

  toggleSearchContainers(): void {
    this.isSearchVisible = !this.isSearchVisible;
  }

  searchContent(): void {
    let login = document.getElementById("siva1");
    if (login) {
      login.style.visibility = "hidden";
    }
  }

  calculateTotal(item: Product): number {
    // Calculate total price for the item
    return item.quantity * parseFloat(item.price.replace('₹', '').replace(',', ''));
  }

  updateTotal(): void {
    // Update total price for the entire cart (if needed)
    // Example: Calculate and update total price in the sidebar
  }

  calculateTotalCost(): number {
    let total = 0;
    for (let item of this.cartService.getItems()) {
      total += this.calculateTotal(item);
    }
    return total;
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.updateCartItem(item);
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.updateCartItem(item);
    }
  }

  openImagePopup(imageSrc: string) {
    this.modalImageSrc = imageSrc;
    this.isModalOpen = true;
  }
}