import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CookiesComponent } from './cookies/cookies.component';
import { OrdertraceComponent } from './ordertrace/ordertrace.component';
import { ProfileComponent } from './profile/profile.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { EditaddressComponent } from './editaddress/editaddress.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink,RouterLinkActive,MatSelectModule,
    MatDialogModule,NavbarComponent,FooterComponent,CookiesComponent,PlaceorderComponent,EditaddressComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PMART-ENTERPRISES';
  ngOnInit(): void {
    
  }
  
}


