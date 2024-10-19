import { Injectable } from '@angular/core';
import { StripeService, StripeCardComponent } from 'ngx-stripe'; // Assuming you're using ngx-stripe for Stripe integration
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { StripeToken } from '@stripe/stripe-js';

@Injectable({
  providedIn: 'root'
})
export class FormNavigationService {

  private currentPage = 0;
  private formPages: NodeListOf<Element>;
  private paymentForm: HTMLElement;

  constructor(
    private stripeService: StripeService,
    private fb: FormBuilder
  ) {}

  initializeFormPages() {
    this.formPages = document.querySelectorAll('.page');
    this.paymentForm = document.getElementById('paymentForm');
  }

  next() {
    if (this.currentPage < this.formPages.length - 1) {
      this.formPages[this.currentPage].classList.remove('active');
      this.currentPage++;
      this.formPages[this.currentPage].classList.add('active');
    }
  }

  prev() {
    if (this.currentPage > 0) {
      this.formPages[this.currentPage].classList.remove('active');
      this.currentPage--;
      this.formPages[this.currentPage].classList.add('active');
    }
  }

  showPaymentForm(paymentMethod: string): Observable<void> {
    this.paymentForm.innerHTML = '';

    if (paymentMethod === 'card') {
      return this.setupStripeCard();
    } else if (paymentMethod === 'netbanking') {
      this.paymentForm.innerHTML = `
        <label for="bank">Select Bank:</label>
        <select id="bank" name="bank">
          <option value="bank1">Bank 1</option>
          <option value="bank2">Bank 2</option>
        </select>
      `;
      return of(null);
    } else if (paymentMethod === 'upi') {
      this.paymentForm.innerHTML = `
        <label for="upiId">UPI ID:</label>
        <input type="text" id="upiId" name="upiId" required>
      `;
      return of(null);
    }

    return of(null);
  }

  private setupStripeCard(): Observable<void> {
    const elements = this.stripeService.elements();
    const card: StripeCardComponent = elements.create('card');

    return new Observable<void>(observer => {
      card.mount('#card-element');

      card.on('change', (event) => {
        const displayError = document.getElementById('card-errors');
        if (displayError) {
          if (event.error) {
            displayError.textContent = event.error.message;
          } else {
            displayError.textContent = '';
          }
        }
      });

      const form = document.querySelector('form');
      form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const { token, error } = await this.stripeService.createToken(card, {} as any).toPromise();
        if (error) {
          const errorElement = document.getElementById('card-errors');
          if (errorElement) {
            errorElement.textContent = error.message;
          }
        } else {
          this.stripeTokenHandler(token);
        }
      });

      observer.next();
    });
  }

  private stripeTokenHandler(token: StripeToken) {
    const form = document.querySelector('form');
    if (form) {
      const hiddenInput = document.createElement('input');
      hiddenInput.setAttribute('type', 'hidden');
      hiddenInput.setAttribute('name', 'stripeToken');
      hiddenInput.setAttribute('value', token.id);
      form.appendChild(hiddenInput);
      form.submit();
    }
  }
}
