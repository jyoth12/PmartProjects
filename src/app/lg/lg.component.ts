import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface VariantOption {
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
 
  variant: VariantOption[];
  selectedVariant?: string;
  
}

@Component({
  selector: 'app-lg',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './lg.component.html',
  styleUrl: './lg.component.css'
})
export class LgComponent {

  cartItemCount: number = 0;
  products: Product[] = [
    //card1
    {
      id: 1,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC1.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
    
    },
    //card2
    {
      id: 2,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC2.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
    
    
    },
    //card3
    {
      id: 3,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC1.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC3.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
   
    },
    //card4
    {
      id: 4,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC4.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
    ],
    variant: [
      { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
      { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
    ],
    showAdditionalContent: false,

    },
    //card5
    {
      id: 5,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC5.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
  
    },
    //card6
    {
      id: 6,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC6.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
 
    },
    //card7
    {
      id: 7,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC7.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
    
    
    },
    //card8
    {
      id: 8,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC8.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
    
    
    
    },
    //card9
    {
      id: 9,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC9.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,

    },
    //card10
    {
      id: 10,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC10.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,

    
    },
    //card11
    {
      id: 11,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC11.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
    
    
    },
    //card12
    {
      id: 12,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC12.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
      
    
    },
    //card13
    {
      id: 13,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC13.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
     
    
    },
    //card14
    {
      id: 14,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC14.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
     
    
    },
    //card15
    {
      id: 15,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC15.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
   
    
    },
    //card16
    {
      id: 16,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC16.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
   
    
    },
    //card17
    {
      id: 17,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC17.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
     
    },
    //card18
    {
      id: 18,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC18.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
    
    
    },
    //card19
    {
      id: 19,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC19.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
     
    
    },
    //card20
    {
      id: 20,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC20.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
     
    },
    //card21
    {
      id: 21,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC21.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
     
    },
    //card22
    {
      id: 22,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC22.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
    
    },
    //card23
    {
      id: 23,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC23.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
     
    
    
    },
    //card24
    {
      id: 24,
      title: 'AC',
      price: '₹XXXX',
      imageUrl: 'assets/AC/AC24.jpeg',
      description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)',
      options: [
        { imageUrl: 'assets/AC/AC1.1.jpeg' },
        { imageUrl: 'assets/AC/AC1.2.jpeg' },
        { imageUrl: 'assets/AC/AC1.3.jpeg' },
        { imageUrl: 'assets/AC/AC1.4.jpeg' },
        { imageUrl: 'assets/AC/AC1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/AC/white AC1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/AC/gray AC1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/AC/gray AC1.1.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.2.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.3.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.4.jpeg' },
            { imageUrl: 'assets/AC/gray AC1.5.jpeg' },
          ]
        }
      ],
      variant: [
        { label: '2024 Model - 1.5 Ton 3 Star', active: false, price: '₹18,999', description: 'MarQ by Flipkart 2024 Range 1.5 Ton 3 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (153IPG23WQ, Copper Condenser)' },
        { label: '2024 Model - 1.3 Ton 3 Star', active: true, price: '₹22,599', description: 'MarQ by Flipkart 2024 1.5 Ton 5 Star Split Inverter 4-in-1 Convertible with Turbo Cool Technology AC - White  (155IPG24WQ, Copper Condenser)' },
      ],
      showAdditionalContent: false,
    
    }
  ];

 

  // capacity.....seater4,seater6 ............................
  selectVariant(product: Product, label: string) {
   
    product.price = '';
    product.description = '';
    
    // Find the selected capacity option
    const selectedVariantOption = product.variant.find(option => option.label === label);
    
    if (selectedVariantOption) {
      // Update product's selected capacity
      product.selectedVariant = label;
      // Update product's main image and options based on product id
      if (product.id === 1) {

        //optional images
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }

      } 
      else if (product.id === 2) {
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      else if (product.id === 3) {
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      else if(product.id === 4){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }

      }
      else if(product.id === 9){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      else if(product.id === 10){
    
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
       
      }
      else if(product.id === 11){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
       
      }
      else if(product.id === 12){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
        
      }
      else if(product.id === 13){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
        
      }
      else if(product.id === 14){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      
      }
      else if(product.id === 15){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
       
        
      }
      else if(product.id === 16){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      
      }
      else if(product.id === 17){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      else if(product.id === 18){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      else if(product.id === 19){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      else if(product.id === 20){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      else if(product.id === 21){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
   
      }
      else if(product.id === 22){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
        
      }
      else if(product.id === 23){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      else if(product.id === 24){
        if (label === '2024 Model - 1.5 Ton 3 Star') {
          product.mainImageSrc = 'assets/AC/AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/AC1.1.jpeg' },
            { imageUrl: 'assets/AC/AC1.2.jpeg' },
            { imageUrl: 'assets/AC/AC1.3.jpeg' },
            { imageUrl: 'assets/AC/AC1.4.jpeg' },
            { imageUrl: 'assets/AC/AC1.5.jpeg' }

          ];
        } else if (label === '2024 Model - 1.5 Ton 5 Star') {
          product.mainImageSrc = 'assets/AC/white AC1.jpeg';
          product.options = [
            { imageUrl: 'assets/AC/white AC1.1.jpeg' },
            { imageUrl: 'assets/AC/white AC1.2.jpeg' },
            { imageUrl: 'assets/AC/white AC1.3.jpeg' },
            { imageUrl: 'assets/AC/white AC1.4.jpeg' },
            { imageUrl: 'assets/AC/white AC1.5.jpeg' } 
              ];
          
        }
      }
      product.price = selectedVariantOption.price;
      product.description = selectedVariantOption.description;
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

