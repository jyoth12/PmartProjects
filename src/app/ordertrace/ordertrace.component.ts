
import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-ordertrace',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './ordertrace.component.html',
  styleUrl: './ordertrace.component.css'
})
export class OrdertraceComponent{
 
}