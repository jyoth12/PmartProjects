import { CommonModule } from '@angular/common';
import {Component, OnInit, OnDestroy, Inject, PLATFORM_ID} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, OnDestroy{

  currentIndex = 0;
  cardsToShow = 4;  // Default value for server-side rendering
  resizeObserver!: ResizeObserver;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateCardsToShow();
      this.initializeResizeObserver();
      window.addEventListener('resize', this.updateCardsToShow);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.resizeObserver.disconnect();
      window.removeEventListener('resize', this.updateCardsToShow);
    }
  }

  initializeResizeObserver() {
    this.resizeObserver = new ResizeObserver(() => {
      this.updateCardsToShow();
    });

    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
      this.resizeObserver.observe(carouselContainer);
    }
  }

  updateCardsToShow = () => {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth < 768) {
        this.cardsToShow = 1;
      } else if (window.innerWidth < 992) {
        this.cardsToShow = 2;
      } else if (window.innerWidth < 1200) {
        this.cardsToShow = 3;
      } else {
        this.cardsToShow = 5;
      }
    }
  };
}




// import { CommonModule } from '@angular/common';
// import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
// import { isPlatformBrowser } from '@angular/common';
// import { RouterLink } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-slider',
//   standalone: true,
//   imports: [CommonModule, RouterLink],
//   templateUrl: './slider.component.html',
//   styleUrls: ['./slider.component.css']
// })
// export class SliderComponent implements OnInit, OnDestroy {
  // sliderItems: any[] = [];
  // currentIndex = 0;
  // cardsToShow = 4; // Default value for server-side rendering
  // resizeObserver!: ResizeObserver;
  // private subscription!: Subscription;

  // constructor(
  //   @Inject(PLATFORM_ID) private platformId: Object,
  //   private http: HttpClient
  // ) {}

  // ngOnInit() {
  //   this.fetchSliderItems();

  //   if (isPlatformBrowser(this.platformId)) {
  //     this.updateCardsToShow();
  //     this.initializeResizeObserver();
  //     window.addEventListener('resize', this.updateCardsToShow);
  //   }
  // }

  // ngOnDestroy() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     this.resizeObserver.disconnect();
  //     window.removeEventListener('resize', this.updateCardsToShow);
  //   }
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

  // fetchSliderItems() {
  //   this.subscription = this.http.get<any[]>('http://localhost:5002/api/slider').subscribe(data => {
  //     this.sliderItems = data;
  //   });
  // }

  // initializeResizeObserver() {
  //   this.resizeObserver = new ResizeObserver(() => {
  //     this.updateCardsToShow();
  //   });

  //   const carouselContainer = document.querySelector('.carousel-container');
  //   if (carouselContainer) {
  //     this.resizeObserver.observe(carouselContainer);
  //   }
  // }

  // updateCardsToShow = () => {
  //   if (isPlatformBrowser(this.platformId)) {
  //     if (window.innerWidth < 768) {
  //       this.cardsToShow = 1;
  //     } else if (window.innerWidth < 992) {
  //       this.cardsToShow = 2;
  //     } else if (window.innerWidth < 1200) {
  //       this.cardsToShow = 3;
  //     } else {
  //       this.cardsToShow = 4; // Adjust based on your needs
  //     }
  //   }
  // };
// }
