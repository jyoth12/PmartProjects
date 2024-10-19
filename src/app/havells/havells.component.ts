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
  selector: 'app-havells',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './havells.component.html',
  styleUrl: './havells.component.css'
})
export class HavellsComponent {

  cartItemCount: number = 0;
  products: Product[] = [
    //card1
    {
      id: 1,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser1.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
  
    },
    {
      id: 2,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser2.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
   
    },
    {
      id: 3,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser3.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
   
    },
    {
      id: 4,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser4.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 5,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser5.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 6,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser6.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 7,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser7.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
      
    },
    {
      id: 8,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser8.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 9,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser9.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
  
    },
    {
      id: 10,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser10.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,

    },
    {
      id: 11,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser11.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 12,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser12.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
     
    },
    {
      id: 13,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser13.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 14,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser14.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
   
    },
    {
      id: 15,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser15.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
   
    },
    {
      id: 16,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser16.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
      
    },
    {
      id: 17,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser17.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
   
    },
    {
      id: 18,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser18.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
 
    },
    {
      id: 19,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser19.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
   
    },
    {
      id: 20,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser20.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
   
    },
    {
      id: 21,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser21.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
 
    },
    {
      id: 22,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser22.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
    
    },
    {
      id: 23,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser23.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
  
    },
    {
      id: 24,
      title: 'geyser',
      price: '₹XXXX',
      imageUrl: 'assets/Geyser/Geyser24.jpeg',
      description: 'Longway 25 L Storage Water Geyser (Superb, Gray)',
      options: [
        { imageUrl: 'assets/Geyser/Geyser1.1.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.2.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.3.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.4.jpeg' },
        { imageUrl: 'assets/Geyser/Geyser1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Geyser/white Geyser1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/Geyser/gray Geyser1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
          ]
        }
      ],
      capacity: [
        { label: '15L', active: false, price: '₹3,589', description: 'Longway 15 L Storage Water Geyser (Superb, Gray)' },
        { label: '25L', active: false, price: '₹3,989', description: 'Longway 25 L Storage Water Geyser (Superb, Gray)' },
        { label: '30L', active: true, price: '₹4,589', description: 'Longway 35 L Storage Water Geyser (Superb, Gray)' },
        { label: '50L', active: true, price: '₹4,589', description: 'Longway 50 L Storage Water Geyser (Hot Plus, Ivory)' },
      ],
      showAdditionalContent: false,
 
    },
  ];


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
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 2) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 3) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 4) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 5) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 6) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 7) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }
      if (product.id === 8) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }  
      if (product.id === 9) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 10) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 11) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 12) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 13) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }
      if (product.id === 14) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }  
      if (product.id === 15) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 16) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }
      if (product.id === 17) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }
      if (product.id === 18) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 19) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 20) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }   
      if (product.id === 21) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }
      if (product.id === 22) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      }  
      if (product.id === 23) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
              ];
          
        }

      } 
      if (product.id === 24) {

        //optional images
        if (label === '25L') {
          product.mainImageSrc = 'assets/Geyser/Geyser1.jpeg';
          product.options = [
            { imageUrl: 'assets/Geyser/white Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/white Geyser1.5.jpeg' },

          ];
        } else if (label === '50L') {
          product.mainImageSrc = 'assets/Geyser/gray Geyser1.jpeg'; 
          product.options = [
            { imageUrl: 'assets/Geyser/gray Geyser1.1.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.2.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.3.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.4.jpeg' },
            { imageUrl: 'assets/Geyser/gray Geyser1.5.jpeg' },
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

 addToCart(product: Product) {
    const activeColor = product.colors.find(color => color.active);
    const mainImage = product.mainImageSrc || product.imageUrl;
  
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      description:product.description,
      imageUrl: mainImage,
      colorImage: activeColor?.imageUrl,
      quantity: 1 // Ensure quantity is initialized to 1
    };
  
    this.cartService.addToCart(cartItem); // Pass the cart item to the service
    this.cartItemCount = this.cartService.getCartItemCount(); // Update cart item count
    
  }
}

