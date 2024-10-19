import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';
interface totelOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface powerOption {
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
  quantity: number;
  totel: totelOption[];
  selectedtotel?: string;
  power: powerOption[];
  selectedpower?: string;
}
@Component({
  selector: 'app-gasstove',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './gasstove.component.html',
  styleUrl: './gasstove.component.css'
})
export class GasstoveComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 2,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas2.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 3,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas33.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 4,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas42.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 5,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas33.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 6,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas45.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 7,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas5.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },



    {
      id: 8,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas43.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 9,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas35.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 10,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas32.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 11,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas35.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 12,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 13,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 14,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 15,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 16,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 17,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 18,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 19,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 20,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 21,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 22,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 23,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
    {
      id: 24,
      title: 'Gasstove',
      price: '₹XXXX',
      imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
        { imageUrl: 'assets/gasstoves/gas2.jpeg' },
        { imageUrl: 'assets/gasstoves/gas3.jpeg' },
        { imageUrl: 'assets/gasstoves/gas4.jpeg' },
        { imageUrl: 'assets/gasstoves/gas5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#7B838F',
          imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/gasstoves/gas1 - Copy.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          ]
        },
      ],
      totel: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' }
        
      ],
      power: [
        { label: 'auto', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'manual', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    },
  ];

 
  selectpower(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected thickness option
    const selectedpowerOption = product.power.find(powerOption => powerOption.label === label);
    
    if (selectedpowerOption) {
        // Update product's selected thickness
        product.selectedpower = label;
        
        // Update product's main image and options based on product id
        if (product.id === 1) {
            if (label === 'Automatic') {
                product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
                product.options = [
                    { imageUrl: 'assets/gasstoves/gas2.jpeg' },
                    { imageUrl: 'assets/gasstoves/gas3.jpeg' },
                    { imageUrl: 'assets/gasstoves/gas4.jpeg' },
                    { imageUrl: 'assets/gasstoves/gas5.jpeg' },
                    { imageUrl: 'assets/gasstoves/gas2.jpeg' }
                ];
            }
            if (label === 'Manual') {
              product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
              product.options = [
                  { imageUrl: 'assets/gasstoves/gas41.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas42.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas43.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas44.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas45.jpeg' }
              ];
              
          }
        
        } 
        if (product.id === 2) {
          if (label === 'Automatic') {
              product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
              product.options = [
                  { imageUrl: 'assets/gasstoves/gas2.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas3.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas4.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas5.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas2.jpeg' }
              ];
          }
          if (label === 'Manual') {
            product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
            product.options = [
                { imageUrl: 'assets/gasstoves/gas41.jpeg' },
                { imageUrl: 'assets/gasstoves/gas42.jpeg' },
                { imageUrl: 'assets/gasstoves/gas43.jpeg' },
                { imageUrl: 'assets/gasstoves/gas44.jpeg' },
                { imageUrl: 'assets/gasstoves/gas45.jpeg' }
            ];
            
        }
      
      } 
      if (product.id === 3) {
        if (label === 'Automatic') {
            product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
            product.options = [
                { imageUrl: 'assets/gasstoves/gas2.jpeg' },
                { imageUrl: 'assets/gasstoves/gas3.jpeg' },
                { imageUrl: 'assets/gasstoves/gas4.jpeg' },
                { imageUrl: 'assets/gasstoves/gas5.jpeg' },
                { imageUrl: 'assets/gasstoves/gas2.jpeg' }
            ];
        }
        if (label === 'Manual') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
              { imageUrl: 'assets/gasstoves/gas41.jpeg' },
              { imageUrl: 'assets/gasstoves/gas42.jpeg' },
              { imageUrl: 'assets/gasstoves/gas43.jpeg' },
              { imageUrl: 'assets/gasstoves/gas44.jpeg' },
              { imageUrl: 'assets/gasstoves/gas45.jpeg' }
          ];
          
      }
    
    } 
    if (product.id === 4) {
      if (label === 'Automatic') {
          product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
          product.options = [
              { imageUrl: 'assets/gasstoves/gas2.jpeg' },
              { imageUrl: 'assets/gasstoves/gas3.jpeg' },
              { imageUrl: 'assets/gasstoves/gas4.jpeg' },
              { imageUrl: 'assets/gasstoves/gas5.jpeg' },
              { imageUrl: 'assets/gasstoves/gas2.jpeg' }
          ];
      }
      if (label === 'Manual') {
        product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
        product.options = [
            { imageUrl: 'assets/gasstoves/gas41.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' }
        ];
        
    }
  
  } 
  if (product.id === 5) {
    if (label === 'Automatic') {
        product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
        product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' }
        ];
    }
    if (label === 'Manual') {
      product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas41.jpeg' },
          { imageUrl: 'assets/gasstoves/gas42.jpeg' },
          { imageUrl: 'assets/gasstoves/gas43.jpeg' },
          { imageUrl: 'assets/gasstoves/gas44.jpeg' },
          { imageUrl: 'assets/gasstoves/gas45.jpeg' }
      ];
      
  }

} 
if (product.id === 6) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 7) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 8) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 9) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 10) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 11) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 12) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 

  if (product.id === 13) {
            if (label === 'Automatic') {
                product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
                product.options = [
                    { imageUrl: 'assets/gasstoves/gas2.jpeg' },
                    { imageUrl: 'assets/gasstoves/gas3.jpeg' },
                    { imageUrl: 'assets/gasstoves/gas4.jpeg' },
                    { imageUrl: 'assets/gasstoves/gas5.jpeg' },
                    { imageUrl: 'assets/gasstoves/gas2.jpeg' }
                ];
            }
            if (label === 'Manual') {
              product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
              product.options = [
                  { imageUrl: 'assets/gasstoves/gas41.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas42.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas43.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas44.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas45.jpeg' }
              ];
              
          }
        
        } 
        if (product.id === 14) {
          if (label === 'Automatic') {
              product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
              product.options = [
                  { imageUrl: 'assets/gasstoves/gas2.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas3.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas4.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas5.jpeg' },
                  { imageUrl: 'assets/gasstoves/gas2.jpeg' }
              ];
          }
          if (label === 'Manual') {
            product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
            product.options = [
                { imageUrl: 'assets/gasstoves/gas41.jpeg' },
                { imageUrl: 'assets/gasstoves/gas42.jpeg' },
                { imageUrl: 'assets/gasstoves/gas43.jpeg' },
                { imageUrl: 'assets/gasstoves/gas44.jpeg' },
                { imageUrl: 'assets/gasstoves/gas45.jpeg' }
            ];
            
        }
      
      } 
      if (product.id === 15) {
        if (label === 'Automatic') {
            product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
            product.options = [
                { imageUrl: 'assets/gasstoves/gas2.jpeg' },
                { imageUrl: 'assets/gasstoves/gas3.jpeg' },
                { imageUrl: 'assets/gasstoves/gas4.jpeg' },
                { imageUrl: 'assets/gasstoves/gas5.jpeg' },
                { imageUrl: 'assets/gasstoves/gas2.jpeg' }
            ];
        }
        if (label === 'Manual') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
              { imageUrl: 'assets/gasstoves/gas41.jpeg' },
              { imageUrl: 'assets/gasstoves/gas42.jpeg' },
              { imageUrl: 'assets/gasstoves/gas43.jpeg' },
              { imageUrl: 'assets/gasstoves/gas44.jpeg' },
              { imageUrl: 'assets/gasstoves/gas45.jpeg' }
          ];
          
      }
    
    } 

    if (product.id === 16) {
      if (label === 'Automatic') {
          product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
          product.options = [
              { imageUrl: 'assets/gasstoves/gas2.jpeg' },
              { imageUrl: 'assets/gasstoves/gas3.jpeg' },
              { imageUrl: 'assets/gasstoves/gas4.jpeg' },
              { imageUrl: 'assets/gasstoves/gas5.jpeg' },
              { imageUrl: 'assets/gasstoves/gas2.jpeg' }
          ];
      }
      if (label === 'Manual') {
        product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
        product.options = [
            { imageUrl: 'assets/gasstoves/gas41.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' }
        ];
        
    }
  
  } 
  if (product.id === 17) {
    if (label === 'Automatic') {
        product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
        product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas3.jpeg' },
            { imageUrl: 'assets/gasstoves/gas4.jpeg' },
            { imageUrl: 'assets/gasstoves/gas5.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' }
        ];
    }
    if (label === 'Manual') {
      product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas41.jpeg' },
          { imageUrl: 'assets/gasstoves/gas42.jpeg' },
          { imageUrl: 'assets/gasstoves/gas43.jpeg' },
          { imageUrl: 'assets/gasstoves/gas44.jpeg' },
          { imageUrl: 'assets/gasstoves/gas45.jpeg' }
      ];
      
  }

} 
if (product.id === 18) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 19) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 20) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 21) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 22) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 23) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
if (product.id === 24) {
  if (label === 'Automatic') {
      product.mainImageSrc = 'assets/gasstoves/gas2.jpeg';
      product.options = [
          { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          { imageUrl: 'assets/gasstoves/gas3.jpeg' },
          { imageUrl: 'assets/gasstoves/gas4.jpeg' },
          { imageUrl: 'assets/gasstoves/gas5.jpeg' },
          { imageUrl: 'assets/gasstoves/gas2.jpeg' }
      ];
  }
  if (label === 'Manual') {
    product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
    product.options = [
        { imageUrl: 'assets/gasstoves/gas41.jpeg' },
        { imageUrl: 'assets/gasstoves/gas42.jpeg' },
        { imageUrl: 'assets/gasstoves/gas43.jpeg' },
        { imageUrl: 'assets/gasstoves/gas44.jpeg' },
        { imageUrl: 'assets/gasstoves/gas45.jpeg' }
    ];
    
}

} 
        product.price = selectedpowerOption.price;
        product.description = selectedpowerOption.description;
    }
}


  selecttotel(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected capacity option
    const selectedtotelOption = product.totel.find(toteloption => toteloption.label === label);
    
    if (selectedtotelOption) {
      // Update product's selected capacity
      product.selectedtotel = label;
      
      // Update product's main image and options based on product id
      if (product.id === 1) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }    
      if (product.id === 2) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 3) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }              
      if (product.id === 4) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 5) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 6) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 7) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 8) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 9) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 10) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 11) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 12) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 13) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 14) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 15) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 16) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 17) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 18) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 19) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 20) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 21) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 22) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   

      if (product.id === 23) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      if (product.id === 24) {
        if (label === '2') {
          product.mainImageSrc = 'assets/gasstoves/gas1 - Copy.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
            { imageUrl: 'assets/gasstoves/gas2.jpeg' },
          ];
          
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/gasstoves/gas31.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas32.jpeg' },
            { imageUrl: 'assets/gasstoves/gas33.jpeg' },
            { imageUrl: 'assets/gasstoves/gas34.jpeg' },
            { imageUrl: 'assets/gasstoves/gas35.jpeg' },
          ];
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/gasstoves/gas41.jpeg';
          product.options = [
            { imageUrl: 'assets/gasstoves/gas31.jpeg' },
            { imageUrl: 'assets/gasstoves/gas42.jpeg' },
            { imageUrl: 'assets/gasstoves/gas43.jpeg' },
            { imageUrl: 'assets/gasstoves/gas44.jpeg' },
            { imageUrl: 'assets/gasstoves/gas45.jpeg' },
          ];
        } 
      }   
      product.price = selectedtotelOption.price;
      product.description = selectedtotelOption.description;
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

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: Product) {
    product.quantity++;
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
