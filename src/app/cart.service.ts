import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: any[] = [];
  private cartItemCount: number = 0;

  constructor() {
    this.loadCartState();
  }

  addToCart(item: any) {
    const existingItem = this.items.find(i => this.isEqualItem(i, item));

    if (existingItem) {
      // Item already exists in cart, increase quantity
      existingItem.quantity += item.quantity || 1;
    } else {
      // Item does not exist in cart, add it
      this.items.push({ ...item, quantity: item.quantity || 1 });
    }

    this.calculateCartItemCount();
    this.saveCartState();
  }

  removeFromCart(item: any) {
    const index = this.items.findIndex(i => this.isEqualItem(i, item));
    if (index !== -1) {
      this.items.splice(index, 1);
      this.calculateCartItemCount();
      this.saveCartState();
    }
  }

  updateCartItem(updatedItem: any) {
    const index = this.items.findIndex(item => this.isEqualItem(item, updatedItem));
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      this.calculateCartItemCount();
      this.saveCartState();
    }
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  getItems() {
    return this.items;
  }

  private calculateCartItemCount() {
    this.cartItemCount = this.items.reduce((count, item) => count + (item.quantity || 1), 0);
  }

  private loadCartState() {
    if (typeof localStorage !== 'undefined') {
      const savedItems = localStorage.getItem('cartItems');
      const savedCount = localStorage.getItem('cartItemCount');

      if (savedItems && savedCount) {
        this.items = JSON.parse(savedItems);
        this.cartItemCount = parseInt(savedCount, 10);
      }
    }
  }

  private saveCartState() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(this.items));
      localStorage.setItem('cartItemCount', this.cartItemCount.toString());
    }
  }

  private isEqualItem(item1: any, item2: any): boolean {
    return item1.id === item2.id && item1.colorImage === item2.colorImage;
  }
}
