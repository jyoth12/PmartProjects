import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-myorder',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './myorder.component.html',
  styleUrl: './myorder.component.css'
})
export class MyorderComponent {
  showOrders: boolean = false;
  currentStatus: string = '';

  deliveredOrders = [
    {
      image: 'assets/SofaSet Images/sofa1.avif',
      name: 'sofa',
      price: '₹36600',
      deliveryDate: 'May 17'
    },
    {
      image: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg',
      name: 'Electrical cooker.',
      price: '₹41100',
      deliveryDate: 'May 17'
    },
    {
      image: 'assets/diningset images/dining set2.jpg',
      name: 'Dining set',
      price: '₹16900',
      deliveryDate: 'Mar 11'
    },
    {
      image: 'assets/Dell Laptops Images/black 1.5.jpg',
      name: 'Dell laptop',
      price: '₹21500',
      deliveryDate: 'Dec 27, 2023'
    },
    {
      image: 'assets/woman-4100999_640.jpg',
      name: 'fashion',
      price: '₹37700',
      deliveryDate: 'Oct 19, 2023'
    }
  ];

  returnOrders = [
    {
      image: 'assets/SofaSet Images/sofa1.avif',
      name: 'sofa',
      price: '₹559',
      returnDate: 'Jan 28',
      refundDate: 'Jan 30',
      seller: 'VNS products',
      color: 'Black'
    }
  ];

  cancelledOrders = [
    {
      image: 'assets/diningset images/dining set2.jpg',
      name: 'Dining',
      price: '₹924',
      cancelDate: 'Oct 14',
      seller: 'DotAndKey'
    }
  ];

  showDeliveredOrders() {
    this.showOrders = true;
    this.currentStatus = 'delivered';
  }

  showReturnOrders() {
    this.showOrders = true;
    this.currentStatus = 'return';
  }

  showCancelledOrders() {
    this.showOrders = true;
    this.currentStatus = 'cancelled';
  }
  searchQuery: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    if (this.searchQuery) {
      this.router.navigate(['/search-results'], { queryParams: { query: this.searchQuery } });
    }
  }
}