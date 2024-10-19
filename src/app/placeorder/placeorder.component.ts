import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-placeorder',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent implements OnInit {

  selectedAddress = 'home';
  selectedPayment = 'monzo';
  subtotal = 193.15;
  postage = 0;
  total = this.subtotal + this.postage;
  showNewCardPopup = false;
  showNewAddressPopup = false;

  constructor(private renderer: Renderer2, private el: ElementRef,private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.showContent('credit-debit-card');
  }
togglePopup(popupName: string): void {
    if (popupName === 'newCardPopup') {
      this.showNewCardPopup = !this.showNewCardPopup;
    }
  }
  onBuyNow(): void {
    alert('Order placed successfully!');
  }

  showContent(id: string): void {
    const contents = document.querySelectorAll('.content > div');
    contents.forEach((content) => content.classList.add('hidden'));

    const selectedContent = document.getElementById(id);
    if (selectedContent) {
      selectedContent.classList.remove('hidden');
    }

    const buttons = document.querySelectorAll('.menu button');
    buttons.forEach((button) => button.classList.remove('active'));

    const activeButton = document.querySelector(`.menu button[data-target="${id}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }
  }

  toggleNewCardPopup(): void {
    this.showNewCardPopup = !this.showNewCardPopup;
    this.cdr.detectChanges();
  }

  toggleNewAddressPopup(): void {
    this.showNewAddressPopup = !this.showNewAddressPopup;
  }

  handleFormSubmit(): void {
    console.log('Form submitted');
    this.toggleNewAddressPopup();
    this.toggleNewCardPopup();
  }
  submitNewCardForm(): void {
    // Handle new card popup form submission
    this.togglePopup('newCardPopup');
  }
}