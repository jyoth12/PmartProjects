import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



interface CapacityOption {
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
 
  capacity: CapacityOption[];
  selectedCapacity?: string;
  
}

@Component({
  selector: 'app-bluestar',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './bluestar.component.html',
  styleUrl: './bluestar.component.css'
})
export class BluestarComponent {

  cartItemCount: number = 0;
  products: Product[] = [
    //card1
    {
      id: 1,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler1.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 2,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler2.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 3,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler3.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 4,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler4.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 5,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler5.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
      
    },
    {
      id: 6,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler6.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 7,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler7.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 8,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler8.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 9,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler9.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
      
    },
    {
      id: 10,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler10.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 11,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler11.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 12,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler12.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 13,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler13.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 14,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler14.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 15,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler15.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
  
    },
    {
      id: 16,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler16.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 17,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler17.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
   
    },
    {
      id: 18,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler18.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 19,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler19.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 20,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler20.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 21,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler21.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
  
    },
    {
      id: 22,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler22.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,

    },
    {
      id: 23,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler23.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 24,
      title: 'Cooler',
      price: '₹XXXX',
      imageUrl: 'assets/Coolers/Cooler24.jpeg',
      description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))',
      options: [
        { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
        { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Coolers/white Cooler1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Coolers/color Cooler1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Coolers/color Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/color Cooler1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '65L', active: false, price: '₹12,799', description: 'BAJAJ 65 L Desert Air Cooler  (White, DMH65 NEO (480117))' },
        { label: '90L', active: false, price: '₹10,999', description: 'BAJAJ 90 L Desert Air Cooler  (White, DMH90 NEO (480116))' }, 
      ],
      showAdditionalContent: false,
   
    },
  ];
  // constructor() {}

  // capacity.....seater4,seater6 ............................
  selectCapacity(product: Product, label: string) {
   
    product.price = '';
    product.description = '';
    
    // Find the selected capacity option
    const selectedCapacityOption = product.capacity.find(option => option.label === label);
    
    if (selectedCapacityOption) {
      // Update product's selected capacity
      product.selectedCapacity = label;
      // Update product's main image and options based on product id
      if (product.id === 1) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 2) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 3) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 

      if (product.id === 4) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 

      if (product.id === 5) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 6) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 

      if (product.id === 7) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 

      if (product.id === 8) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }
      } 
      if (product.id === 9) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 10) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 

      if (product.id === 11) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 

      if (product.id === 12) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
        }
      } 
      if (product.id === 13) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 

      if (product.id === 14) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 15) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 16) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 17) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 18) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 19) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 20) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 21) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 22) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 23) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 

      if (product.id === 24) {

        //optional images
        if (label === '65L') {
          product.mainImageSrc = 'assets/Coolers/Cooler1.jpeg';
          product.options = [
            { imageUrl: 'assets/Coolers/Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/Cooler1.5.jpeg' },

          ];
        } else if (label === '90L') {
          product.mainImageSrc = 'assets/Coolers/white Cooler1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Coolers/white Cooler1.1.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.2.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.3.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.4.jpeg' },
            { imageUrl: 'assets/Coolers/white Cooler1.5.jpeg' },
              ];
          
        }

      } 
      product.price = selectedCapacityOption.price;
      product.description = selectedCapacityOption.description;
    }
  }

  //  Modal for additional content  in show and close it will perform  X-ICON
    showAdditionalContent(product: Product) {
    product.showAdditionalContent = true;
  }

  closeAdditionalContent(product: Product) {
    product.showAdditionalContent = false;
  }
 //change in main images
  changeMainImage(product: Product, imageUrl: string) {
    product.mainImageSrc = imageUrl;
  }
 //color images
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

//  addToCart(product: Product) {
   
//     const mainImage = product.mainImageSrc || product.imageUrl;
//     const cartItem = {
//       id: product.id,
//       title: product.title,
//       price: product.price,
//       description:product.description,
//       imageUrl: mainImage,
//       quantity: 1 
//     };
  
//     this.cartService.addToCart(cartItem); 
//     this.cartItemCount = this.cartService.getCartItemCount(); 
    
//   }
  
}

