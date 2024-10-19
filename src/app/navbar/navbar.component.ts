import { Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuOpen = false;
  scrolled = false;
  isSearchVisible = false;
  showDropdown = false;
  searchTerm: string = '';
  selectedCategory: string = 'products';
  items: string[] = ['sofaset', 'fashion', 'furniture', 'toys', 'groceries'];
  filteredItems: string[] = [];

  constructor(public cartService: CartService, private router: Router) {}

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

  filterItems() {
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(this.searchTerm.toLowerCase())
    ).sort();
  }

  selectItem(item: string) {
    this.searchTerm = item;
    this.showDropdown = false;
    this.navigateToPage(item);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    const clickedInside = target.closest('.search-container1');
    if (!clickedInside) {
      this.showDropdown = false;
    }
  }

  navigateToPage(item: string) {
    switch (item.toLowerCase()) {
      case 'sofaset':
        this.router.navigate(['/sofaset']);
        break;
      case 'fashion':
        this.router.navigate(['/fashion']);
        break;
      case 'furniture':
        this.router.navigate(['/furniture']);
        break;
      case 'toys':
        this.router.navigate(['/toys']);
        break;
      default:
        this.router.navigate(['/search'], { queryParams: { q: this.searchTerm, category: this.selectedCategory } });
        break;
    }
  }

  searchContent() {
    this.navigateToPage(this.selectedCategory);
  }
}








// import { Component, HostListener, ViewChild, OnInit, QueryList, ElementRef, ViewChildren} from '@angular/core';
// import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { SearchService } from '../search.service';
// import { HttpClientModule } from '@angular/common/http';





// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [RouterLink,FormsModule,RouterLinkActive,CommonModule,HttpClientModule],
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {
  
//   menuOpen = false;
//   scrolled = false;
//   isSearchVisible = false;
//   showDropdown = false;
//   searchTerm: string = '';
//   selectedCategory: string = 'products';
//   items: string[] = [];
//   filteredItems: string[] = [];
//   results: any[] = [];
//   query: string = '';
//   category: string = '';
//   // categories: any[] | undefined;
//   // products: any[] | undefined;

//   constructor(private searchService: SearchService, private route: ActivatedRoute, private router: Router) {}

//   ngOnInit(): void {
//     this.route.queryParams.subscribe(params => {
//       this.query = params['q'] || '';
//       this.category = params['category'] || 'products';
//       this.search();
//     });
//   }

//   search() {
//     this.searchService.search(this.query, this.category).subscribe(data => {
//       this.results = data;
//     });
//   }

//   toggleMenu() {
//     this.menuOpen = !this.menuOpen;
//     const menuIcon = document.getElementById('menu-icon');
//     const navbar = document.getElementById('navbar');
//     if (this.menuOpen) {
//       menuIcon?.classList.replace('bi-list', 'bi-x');
//       navbar?.classList.add('mobile-menu');
//     } else {
//       menuIcon?.classList.replace('bi-x', 'bi-list');
//       navbar?.classList.remove('mobile-menu');
//     }
//   }

//   @HostListener('window:scroll', [])
//   onWindowScroll() {
//     const changePosition = 50;
//     const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//     this.scrolled = scrollPosition >= changePosition;
//   }

//   toggleSearchContainers(): void {
//     this.isSearchVisible = !this.isSearchVisible;
//   }

//   filterItems() {
//     if (this.searchTerm.trim() === '') {
//       this.filteredItems = [];
//       return;
//     }

//     this.searchService.getSearchSuggestions(this.searchTerm).subscribe(suggestions => {
//       this.filteredItems = suggestions.filter(item =>
//         item.toLowerCase().includes(this.searchTerm.toLowerCase())
//       ).sort();
//       this.showDropdown = this.filteredItems.length > 0;
//     });
//   }

//   selectItem(item: string) {
//     this.searchTerm = item;
//     this.showDropdown = false;
//     this.searchContent();
//   }

//   @HostListener('document:click', ['$event'])
//   onDocumentClick(event: Event): void {
//     const target = event.target as HTMLElement;
//     const clickedInside = target.closest('.search-container1');
//     if (!clickedInside) {
//       this.showDropdown = false;
//     }
//   }

//   searchContent() {
//     if (this.searchTerm.trim()) {
//       const lowerCaseTerm = this.searchTerm.toLowerCase();
//       this.router.navigate([`/${lowerCaseTerm}`]);
//     } else {
//       console.log('Search term is empty');
//     }
//   }
  
//   selectSuggestion(suggestion: string) {
//     this.searchTerm = suggestion;
//     this.showDropdown = false;
//     this.searchContent();
//   }
  
// }