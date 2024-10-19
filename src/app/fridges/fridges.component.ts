import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
interface CapacityOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface RatingOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}
interface BaseOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface Product {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
  description: string;
  options: { imageUrl: string }[];
  colors: {
    backgroundColor: string;
    imageUrl: string;
    active?: boolean;
    optionImages: { imageUrl: string }[];
  }[];
  mainImageSrc?: string;
  showAdditionalContent: boolean;
 
  Capacity: CapacityOption[];
  selectedCapacity?: string;
  Rating: RatingOption[];
  selectedRating?: string;
  Base: CapacityOption[];
  selectedBase?: string;
}
@Component({
  selector: 'app-fridges',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './fridges.component.html',
  styleUrl: './fridges.component.css'
})
export class FridgesComponent {
  cartItemCount: number=0;
  products: Product[] = [
    {
      id: 1,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge1.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
 
    
    
    },
    {
      id: 2,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge3.1.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,

    
    
    },
    {
      id: 3,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/Fridge5.1.jpg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,

    
    
    },
    {
      id: 4,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge2.1.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,

    
    
    },
    {
      id: 5,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridgegray2.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
   
    
    
    },
    {
      id: 6,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge3.5.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
    
    
    
    },
    {
      id: 7,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge2.4.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
   
    
    
    },
    {
      id: 8,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge8.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
    
    
    
    },
    {
      id: 9,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/9.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
  
    
    
    },
    {
      id: 10,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge10.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
 
    
    
    },
    {
      id: 11,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge11.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,

    
    
    },
    {
      id: 12,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge12.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
    
    
    
    },
    {
      id: 13,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge13.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
  
    
    
    },
    {
      id: 14,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge14.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
    
    
    
    },
    {
      id: 15,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge15.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 16,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge16.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
   
    
    
    },
    {
      id: 17,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge17.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
   
    
    
    },
    {
      id: 18,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge18.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
   
    
    
    },
    {
      id: 19,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge19.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
    
    
    
    },

    {
      id: 20,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge20.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 21,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge21.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 22,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge22.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
    
    
    
    },
    {
      id: 23,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge 23.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,

    
    
    },
    {
      id: 24,
      title: 'Fridge',
      price: '₹XXXX',
      imageUrl: 'assets/Fridge/fridge 24.jpeg',
      description: '183 L Direct Cool Single Door 5 Star Refrigerator with Base Drawer with Digital Inverter  (HIMALAYAN POPPY BLUE, RR20D2825HV/NL)',
      options: [
        { imageUrl: 'assets/Fridge/fridge1.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
        { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#27375F',
          imageUrl: 'assets/Fridge/fridge2.1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge2.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#922057',
          imageUrl: 'assets/Fridge/fridge1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fridge/fridge1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ]
        }
      ],
      Capacity: [
        { label: '236L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '256L', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    Rating: [
        { label: '3 star', active: true, price: '₹18,999', description: 'lorem1' },
        { label: '5 star', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Base:[
        { label: 'yes', active: true, price: '₹18,999', description: 'lorem1' }
      ],
      showAdditionalContent: false,
 
    
    
    },
  ];


 
  selectRating(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected thickness option
    const selectedRatingOption = product.Rating.find(RatingOption => RatingOption.label === label);
    
    if (selectedRatingOption) {
        // Update product's selected thickness
        product.selectedRating = label;
        
        // Update product's main image and options based on product id
        if (product.id === 1) {
            if (label === '3 star') {
                product.mainImageSrc = 'assets/Fridge/fridge1.jpeg';
                product.options = [
                    { imageUrl: 'assets/Fridge/fridge1.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
                ];
                product.colors = [
                    {
                        backgroundColor: '#27375F',
                        imageUrl: 'assets/Fridge/fridge2.1.jpeg',
                        active: true,
                        optionImages: [
                          { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge2.5.jpeg' }
                        ]
                    },
                    {
                        backgroundColor: '#922057',
                        imageUrl: 'assets/Fridge/fridge1.jpeg',
                        active: false,
                        optionImages: [
                          { imageUrl: 'assets/Fridge/fridge1.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge1.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge1.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge1.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge1.jpeg' }
                        ]
                    }
                ];
            }
            if (label === '5 star') {
              product.mainImageSrc = 'assets/Fridge/fridgegray1.jpeg';
              product.options = [
                  { imageUrl: 'assets/Fridge/fridgegray1.jpeg' },
                  { imageUrl: 'assets/Fridge/fridgegray2.jpeg' },
                  { imageUrl: 'assets/Fridge/fridgegray3.jpeg' },
                  { imageUrl: 'assets/Fridge/fridgegray4.jpeg' },
                  { imageUrl: 'assets/Fridge/fridgegray5.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#922057',
                      imageUrl: 'assets/Fridge/Fridge5.1.jpg',
                      active: true,
                      optionImages: [
                          { imageUrl: 'assets/Fridge/Fridge5.1.jpg' },
                          { imageUrl: 'assets/Fridge/fridge5.2.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge5.3.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge5.4.jpeg' },
                          { imageUrl: 'assets/Fridge/fridge5.5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: '#ABABAB',
                      imageUrl: 'assets/Fridge/fridgegray1.jpeg',
                      active: false,
                      optionImages: [
                          { imageUrl: 'assets/Fridge/fridgegray1.jpeg' },
                          { imageUrl: 'assets/Fridge/fridgegray2.jpeg' },
                          { imageUrl: 'assets/Fridge/fridgegray3.jpeg' },
                          { imageUrl: 'assets/Fridge/fridgegray4.jpeg' },
                          { imageUrl: 'assets/Fridge/fridgegray5.jpeg' }
                      ]
                  }
              ];
          }
        
        } 
        product.price = selectedRatingOption.price;
        product.description = selectedRatingOption.description;
    }
}


  selectCapacity(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected capacity option
    const selectedCapacityOption = product.Capacity.find(Capacityoption => Capacityoption.label === label);
    
    if (selectedCapacityOption) {
      // Update product's selected capacity
      product.selectedCapacity = label;
      
      // Update product's main image and options based on product id
      if (product.id === 1) {
        if (label === '236L') {
          product.mainImageSrc = 'assets/Fridge/fridge1.jpeg';
          product.options = [
              { imageUrl: 'assets/Fridge/fridge1.jpeg' },
              { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
              { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
              { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
              { imageUrl: 'assets/Fridge/fridge1.5.jpeg' },
          ];
          product.colors = [
              {
                  backgroundColor: '#27375F',
                  imageUrl: 'assets/Fridge/fridge2.1.jpeg',
                  active: true,
                  optionImages: [
                    { imageUrl: 'assets/Fridge/fridge2.1.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge2.2.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge2.3.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge2.4.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge2.5.jpeg' }
                  ]
              },
              {
                  backgroundColor: '#922057',
                  imageUrl: 'assets/Fridge/fridge1.jpeg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/Fridge/fridge1.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge1.2.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge1.3.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge1.4.jpeg' },
                    { imageUrl: 'assets/Fridge/fridge1.5.jpeg' }
                  ]
              }
          ];
      }
        if (label === '256L') {
          product.mainImageSrc = 'assets/Fridge/fridge3.1.jpeg';
          product.options = [
            { imageUrl: 'assets/Fridge/fridge3.1.jpeg' },
            { imageUrl: 'assets/Fridge/fridge3.2.jpeg' },
            { imageUrl: 'assets/Fridge/fridge3.3.jpeg' },
            { imageUrl: 'assets/Fridge/fridge3.4.jpeg' },
            { imageUrl: 'assets/Fridge/fridge3.5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#922057',
              imageUrl: 'assets/Fridge/Fridge5.1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/Fridge/Fridge5.1.jpg' },
                { imageUrl: 'assets/Fridge/fridge5.2.jpeg' },
                { imageUrl: 'assets/Fridge/fridge5.3.jpeg' },
                { imageUrl: 'assets/Fridge/fridge5.4.jpeg' },
                { imageUrl: 'assets/Fridge/fridge5.5.jpeg' },
              ]
              },
              {
                backgroundColor: '#27375F',
                imageUrl: 'assets/Fridge/fridge3.1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/Fridge/fridge3.1.jpeg' },
                 { imageUrl: 'assets/Fridge/fridge3.2.jpeg '},
                 { imageUrl: 'assets/Fridge/fridge3.3.jpeg' },
                 { imageUrl: 'assets/Fridge/fridge3.4.jpeg' },
                 { imageUrl: 'assets/Fridge/fridge3.5.jpeg' },
                ]
              }
            ]
        } 
      }               
      product.price = selectedCapacityOption.price;
      product.description = selectedCapacityOption.description;
    }
  }
  selectBase(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected capacity option
    const selectedBaseOption = product.Base.find(Baseoption => Baseoption.label === label);
    
    if (selectedBaseOption) {
      // Update product's selected capacity
      product.selectedBase = label;
      
      // Update product's main image and options based on product id
           
      product.price = selectedBaseOption.price;
      product.description = selectedBaseOption.description;
    }
  }
    showAdditionalContent(product: Product) {
    product.showAdditionalContent = true;
  }

  closeAdditionalContent(product: Product) {
    product.showAdditionalContent = false;
  }

  changeMainImage(product: Product, imageUrl: string) {
    product.mainImageSrc = imageUrl;
  }

  changeColor(product: Product, color: any) {
    product.colors.forEach(c => c.active = false);
    color.active = true;
    // Update options images based on selected color
    product.options = color.optionImages;
    product.mainImageSrc = color.imageUrl;
  }

  

  // Wishlist management
  popupVisible = false;
  showLoginForm = false;

  togglePopup() {
    this.popupVisible = !this.popupVisible;
  }

  hidePopup() {
    this.popupVisible = false;
  }

  showLoginPopup() {
    this.showLoginForm = true;
  }

  hideLoginPopup() {
    this.showLoginForm = false;
  }
  constructor(private cartService: CartService) {
    this.cartItemCount = this.cartService.getCartItemCount();
  }

 addToCart(product: Product) {
   
    const mainImage = product.mainImageSrc || product.imageUrl;
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      description:product.description,
      imageUrl: mainImage,
      quantity: 1 // Ensure quantity is initialized to 1
    };
  
    this.cartService.addToCart(cartItem); // Pass the cart item to the service
    this.cartItemCount = this.cartService.getCartItemCount(); // Update cart item count
    
  }
  
}







