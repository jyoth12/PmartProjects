import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  // emailAddress: string = 'pmartenterprises@gmail.com';
  // phone:number=2345566777;
  newLocation: any;
addLocationToFooter() {
throw new Error('Method not implemented.');
}

showPopup: boolean = false;
}
