import { Component } from '@angular/core';
import { OnInit, OnDestroy, Inject, PLATFORM_ID} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-seemore',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './seemore.component.html',
  styleUrl: './seemore.component.css'
})
export class SeemoreComponent  {


}






// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
// import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-seemore',
//   standalone: true,
//   imports: [CommonModule,RouterLink],
//   templateUrl: './seemore.component.html',
//   styleUrl: './seemore.component.css'
// })
// export class SeemoreComponent implements OnInit {
//   categories: any[] = [];
//   // limit = 10;
//   // offset = 0;
//   loading = false;

//   constructor(private http: HttpClient) { }

//   ngOnInit(): void {
//     this.loadCategories();
//   }

//   loadCategories(): void {
//     this.loading = true;
//     this.http.get<any[]>(`http://localhost:3000/api/categories`)
//       .subscribe(
//         data => {
//           this.categories = [...this.categories, ...data];
//           this.loading = false;
//         },
//         error => {
//           console.error('Error fetching categories:', error);
//           this.loading = false;
//         }
//       );
//   }

  
// }