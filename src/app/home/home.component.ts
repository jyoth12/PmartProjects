import { Component } from '@angular/core';
import { VideosComponent } from '../videos/videos.component';
import { CardsComponent } from '../cards/cards.component';
import { RouterLink } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideosComponent,CardsComponent,RouterLink,SliderComponent,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
