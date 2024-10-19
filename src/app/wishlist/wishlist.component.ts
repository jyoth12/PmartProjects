import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


interface WishlistItem {
  image: string;
  name: string;
  ram: string;
  color: string;
  addedOn: string;
  price: number;
  quantity: number;
  stock: number; 
  selected: boolean;
}

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent  {

  wishlistItems: WishlistItem[] = [
    {
      name: 'Dell Laptop',
      image: 'assets/Dell Laptops Images/dell laptop1.jpg',
      ram: '64GB',
      color: 'Gray',
      addedOn: 'March 28, 2019',
      price: 47995,
      quantity: 1,
      stock: 5, 
      selected: false
    },
    {
      name: 'Dell Laptop',
      image: 'assets/Dell Laptops Images/dell laptop2.jpg',
      ram: '128GB',
      color: 'Gray',
      addedOn: 'March 28, 2019',
      price: 37995,
      quantity: 1,
      stock: 0, 
      selected: false
    }
   
  ];

  selectedAction = 'add-to-cart';

  toggleSelectAll(event: any) {
    const checked = event.target.checked;
    this.wishlistItems.forEach(item => item.selected = checked);
  }

  applyAction() {
    const selectedItems = this.wishlistItems.filter(item => item.selected);
    console.log('Applying action:', this.selectedAction);
    console.log('Selected items:', selectedItems);
    
  }

  removeItem(item: WishlistItem) {
    const index = this.wishlistItems.indexOf(item);
    if (index > -1) {
      this.wishlistItems.splice(index, 1);
    }
  }

  updateAction() {
    console.log('Update button clicked');
    
  
}
}