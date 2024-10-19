import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-laptops',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './laptops.component.html',
  styleUrl: './laptops.component.css'
})
export class LaptopsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // laptops: any[] = []; 
  
  // private apiUrl = 'http://localhost:3000/api/laptops'; 

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.fetchLaptops();
  // }

  // fetchLaptops(): void {
  //   this.http.get<any[]>(this.apiUrl).pipe(
  //     catchError(error => {
  //       console.error('Error fetching laptops:', error);
  //       return of([]); // Return an empty array on error
  //     })
  //   ).subscribe(data => this.laptops = data);
  // }
}