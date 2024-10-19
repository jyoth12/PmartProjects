import { Component, ElementRef, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menjackets',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menjackets.component.html',
  styleUrl: './menjackets.component.css'
})
export class MenjacketsComponent {
  cartCount: number = 0; // Counter to keep track of cart items
  isLiked: boolean = false;
  @ViewChildren('additionalContent') additionalContents!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Initialize any component setup here if needed
  }

  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }

  handleCartClick(): void {
    this.cartCount++;
  }

  hideAdditionalContent(additionalContent: HTMLElement): void {
    this.renderer.setStyle(additionalContent, 'display', 'none');
  }

  showAdditionalContent(event: Event): void {
    const target = event.target as HTMLElement;
    const productBox = target.closest('.product-box') as HTMLElement;
    if (productBox) {
      const additionalContent = productBox.querySelector('.additional-content') as HTMLElement;
      if (additionalContent) {
        this.renderer.setStyle(additionalContent, 'display', 'block');
      }
    }
  }

  closeAllAdditionalContent(): void {
    this.additionalContents.forEach(content => {
      this.hideAdditionalContent(content.nativeElement);
    });
  }

}
