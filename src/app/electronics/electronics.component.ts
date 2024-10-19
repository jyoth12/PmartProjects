// import { NgModule } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [RouterLink, CommonModule ],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // electronics: any[] = [];

  // apiUrl = 'http://localhost:3000/api/electronics'; // Update with your backend API URL

  // constructor(private http: HttpClient) { }

  // ngOnInit(): void {
  //   this.loadElectronics();
  // }

  // loadElectronics(): void {
  //   this.http.get<any[]>(this.apiUrl).subscribe(
  //     data => {
  //       this.electronics = data;
  //       console.log('Electronics data:', this.electronics);
  //     },
  //     error => {
  //       console.error('Error fetching electronics:', error);
  //     }
  //   );
  // }
 
}