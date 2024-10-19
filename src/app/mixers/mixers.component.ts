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
 
  totel: totelOption[];
  selectedtotel?: string;
  power: powerOption[];
  selectedpower?: string;
}
@Component({
  selector: 'app-mixers',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './mixers.component.html',
  styleUrl: './mixers.component.css'
})
export class MixersComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer2.1.jpg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      
    
    
    },
    {
      id: 2,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/greenmix3.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 3,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mix21.jpg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.2.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 4,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer3.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 5,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/pinkmix1.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
    
    
    
    },
    {
      id: 6,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/skumix1.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      
    
    
    },
    {
      id: 7,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/pinkmix2.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 8,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mix24.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 9,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/sktmix3.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
    
    
    
    },
    {
      id: 10,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/pinkmix4.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      
    
    
    },
    {
      id: 11,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer11.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      
    
    
    },
    {
      id: 12,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer12.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      
    
    
    },
    {
      id: 13,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer13.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.2.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      
    
    
    },
    {
      id: 14,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer14.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 15,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer15.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 16,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer16.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      
    
    },
    {
      id: 17,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer17.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,

    
    
    },
    {
      id: 18,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer18.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
  
    
    },
    {
      id: 19,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer19.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
    
    },
    {
      id: 20,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer20.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      
    
    
    },
    {
      id: 21,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer21.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    },
    {
      id: 22,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer22.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
    
    
    
    },
    {
      id: 23,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer2.5.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
    },
    {
      id: 24,
      title: 'Mixer',
      price: '₹XXXX',
      imageUrl: 'assets/mixers/mixer24.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#69D5E9',
          imageUrl: 'assets/mixers/mixer1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer1.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.jpeg' },
            { imageUrl: 'assets/mixers/mixer3.jpeg' },
            { imageUrl: 'assets/mixers/mixer4.jpeg' },
            { imageUrl: 'assets/mixers/mixer5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/mixers/mixer2.1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' },
          ]
        }
      ],
      totel: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      power: [
        { label: '500W', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '750W', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
     
    
    
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
            if (label === '500W') {
                product.mainImageSrc = 'assets/mixers/mix21.jpg';
                product.options = [
                    { imageUrl: 'assets/mixers/mix21.jpg' },
                    { imageUrl: 'assets/mixers/mix22.jpeg' },
                    { imageUrl: 'assets/mixers/mix23.jpeg' },
                    { imageUrl: 'assets/mixers/mix24.jpeg' },
                    { imageUrl: 'assets/mixers/mix24.jpeg' }
                ];
                product.colors = [
                    {
                        backgroundColor: '#46A9CA',
                        imageUrl: 'assets/mixers/skumix1.jpeg',
                        active: true,
                        optionImages: [
                          { imageUrl: 'assets/mixers/skymix2.jpeg' },
                          { imageUrl: 'assets/mixers/skumix1.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                        ]
                    },
                    {
                        backgroundColor: '#7E5AC0',
                        imageUrl: 'assets/mixers/mix21.jpg',
                        active: false,
                        optionImages: [
                          { imageUrl: 'assets/mixers/mix21.jpg' },
                          { imageUrl: 'assets/mixers/mix22.jpg' },
                          { imageUrl: 'assets/mixers/mix23.jpg' },
                          { imageUrl: 'assets/mixers/mix24.jpg' },
                          { imageUrl: 'assets/mixers/mix24.jpg' }
                        ]
                    }
                ];
            }
            if (label === '750W') {
              product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
              product.options = [
                  { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                  { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#0B7977',
                      imageUrl: 'assets/mixers/greenmix1.jpeg',
                      active: true,
                      optionImages: [
                          { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: 'black',
                      imageUrl: 'assets/mixers/mixer2.1.jpg',
                      active: false,
                      optionImages: [
                          { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                          { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                      ]
                  }
              ];
          }
        
        } 
        if (product.id === 2) {
          if (label === '500W') {
              product.mainImageSrc = 'assets/mixers/mix21.jpg';
              product.options = [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#46A9CA',
                      imageUrl: 'assets/mixers/skumix1.jpeg',
                      active: true,
                      optionImages: [
                        { imageUrl: 'assets/mixers/skymix2.jpeg' },
                        { imageUrl: 'assets/mixers/skumix1.jpeg' },
                        { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                        { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                        { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: '#7E5AC0',
                      imageUrl: 'assets/mixers/mix21.jpg',
                      active: false,
                      optionImages: [
                        { imageUrl: 'assets/mixers/mix21.jpg' },
                        { imageUrl: 'assets/mixers/mix22.jpg' },
                        { imageUrl: 'assets/mixers/mix23.jpg' },
                        { imageUrl: 'assets/mixers/mix24.jpg' },
                        { imageUrl: 'assets/mixers/mix24.jpg' }
                      ]
                  }
              ];
          }
          if (label === '750W') {
            product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
            product.options = [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ];
            product.colors = [
                {
                    backgroundColor: '#0B7977',
                    imageUrl: 'assets/mixers/greenmix1.jpeg',
                    active: true,
                    optionImages: [
                        { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                        { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                        { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                        { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                        { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                    ]
                },
                {
                    backgroundColor: 'black',
                    imageUrl: 'assets/mixers/mixer2.1.jpg',
                    active: false,
                    optionImages: [
                        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                    ]
                }
            ];
        }
      
      } 
      if (product.id === 3) {
        if (label === '500W') {
            product.mainImageSrc = 'assets/mixers/mix21.jpg';
            product.options = [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpeg' },
                { imageUrl: 'assets/mixers/mix23.jpeg' },
                { imageUrl: 'assets/mixers/mix24.jpeg' },
                { imageUrl: 'assets/mixers/mix24.jpeg' }
            ];
            product.colors = [
                {
                    backgroundColor: '#46A9CA',
                    imageUrl: 'assets/mixers/skumix1.jpeg',
                    active: true,
                    optionImages: [
                      { imageUrl: 'assets/mixers/skymix2.jpeg' },
                      { imageUrl: 'assets/mixers/skumix1.jpeg' },
                      { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                      { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                      { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                    ]
                },
                {
                    backgroundColor: '#7E5AC0',
                    imageUrl: 'assets/mixers/mix21.jpg',
                    active: false,
                    optionImages: [
                      { imageUrl: 'assets/mixers/mix21.jpg' },
                      { imageUrl: 'assets/mixers/mix22.jpg' },
                      { imageUrl: 'assets/mixers/mix23.jpg' },
                      { imageUrl: 'assets/mixers/mix24.jpg' },
                      { imageUrl: 'assets/mixers/mix24.jpg' }
                    ]
                }
            ];
        }
        if (label === '750W') {
          product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
          product.options = [
              { imageUrl: 'assets/mixers/mixer2.1.jpg' },
              { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
              { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
              { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
              { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
          ];
          product.colors = [
              {
                  backgroundColor: '#0B7977',
                  imageUrl: 'assets/mixers/greenmix1.jpeg',
                  active: true,
                  optionImages: [
                      { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                      { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                      { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                      { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                      { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                  ]
              },
              {
                  backgroundColor: 'black',
                  imageUrl: 'assets/mixers/mixer2.1.jpg',
                  active: false,
                  optionImages: [
                      { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                      { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                      { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                      { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                      { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                  ]
              }
          ];
      }
    
    } 
    if (product.id === 4) {
      if (label === '500W') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
              { imageUrl: 'assets/mixers/mix21.jpg' },
              { imageUrl: 'assets/mixers/mix22.jpeg' },
              { imageUrl: 'assets/mixers/mix23.jpeg' },
              { imageUrl: 'assets/mixers/mix24.jpeg' },
              { imageUrl: 'assets/mixers/mix24.jpeg' }
          ];
          product.colors = [
              {
                  backgroundColor: '#46A9CA',
                  imageUrl: 'assets/mixers/skumix1.jpeg',
                  active: true,
                  optionImages: [
                    { imageUrl: 'assets/mixers/skymix2.jpeg' },
                    { imageUrl: 'assets/mixers/skumix1.jpeg' },
                    { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                    { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                    { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                  ]
              },
              {
                  backgroundColor: '#7E5AC0',
                  imageUrl: 'assets/mixers/mix21.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/mixers/mix21.jpg' },
                    { imageUrl: 'assets/mixers/mix22.jpg' },
                    { imageUrl: 'assets/mixers/mix23.jpg' },
                    { imageUrl: 'assets/mixers/mix24.jpg' },
                    { imageUrl: 'assets/mixers/mix24.jpg' }
                  ]
              }
          ];
      }
      if (label === '750W') {
        product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
        product.options = [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
        ];
        product.colors = [
            {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: true,
                optionImages: [
                    { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                    { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                    { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                    { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                    { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                ]
            },
            {
                backgroundColor: 'black',
                imageUrl: 'assets/mixers/mixer2.1.jpg',
                active: false,
                optionImages: [
                    { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                    { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                    { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                    { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                    { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                ]
            }
        ];
    }
  
  } 
  if (product.id === 5) {
    if (label === '500W') {
        product.mainImageSrc = 'assets/mixers/mix21.jpg';
        product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' }
        ];
        product.colors = [
            {
                backgroundColor: '#46A9CA',
                imageUrl: 'assets/mixers/skumix1.jpeg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/mixers/skymix2.jpeg' },
                  { imageUrl: 'assets/mixers/skumix1.jpeg' },
                  { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                  { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                  { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                ]
            },
            {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpg' },
                  { imageUrl: 'assets/mixers/mix23.jpg' },
                  { imageUrl: 'assets/mixers/mix24.jpg' },
                  { imageUrl: 'assets/mixers/mix24.jpg' }
                ]
            }
        ];
    }
    if (label === '750W') {
      product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mixer2.1.jpg' },
          { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
          { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
          { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
          { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#0B7977',
              imageUrl: 'assets/mixers/greenmix1.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                  { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                  { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                  { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                  { imageUrl: 'assets/mixers/greenmix5.jpeg' }
              ]
          },
          {
              backgroundColor: 'black',
              imageUrl: 'assets/mixers/mixer2.1.jpg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                  { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
              ]
          }
      ];
  }

} 
if (product.id === 6) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 7) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 8) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 9) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
 if (product.id === 10) {
            if (label === '500W') {
                product.mainImageSrc = 'assets/mixers/mix21.jpg';
                product.options = [
                    { imageUrl: 'assets/mixers/mix21.jpg' },
                    { imageUrl: 'assets/mixers/mix22.jpeg' },
                    { imageUrl: 'assets/mixers/mix23.jpeg' },
                    { imageUrl: 'assets/mixers/mix24.jpeg' },
                    { imageUrl: 'assets/mixers/mix24.jpeg' }
                ];
                product.colors = [
                    {
                        backgroundColor: '#46A9CA',
                        imageUrl: 'assets/mixers/skumix1.jpeg',
                        active: true,
                        optionImages: [
                          { imageUrl: 'assets/mixers/skymix2.jpeg' },
                          { imageUrl: 'assets/mixers/skumix1.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                        ]
                    },
                    {
                        backgroundColor: '#7E5AC0',
                        imageUrl: 'assets/mixers/mix21.jpg',
                        active: false,
                        optionImages: [
                          { imageUrl: 'assets/mixers/mix21.jpg' },
                          { imageUrl: 'assets/mixers/mix22.jpg' },
                          { imageUrl: 'assets/mixers/mix23.jpg' },
                          { imageUrl: 'assets/mixers/mix24.jpg' },
                          { imageUrl: 'assets/mixers/mix24.jpg' }
                        ]
                    }
                ];
            }
            if (label === '750W') {
              product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
              product.options = [
                  { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                  { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#0B7977',
                      imageUrl: 'assets/mixers/greenmix1.jpeg',
                      active: true,
                      optionImages: [
                          { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: 'black',
                      imageUrl: 'assets/mixers/mixer2.1.jpg',
                      active: false,
                      optionImages: [
                          { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                          { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                      ]
                  }
              ];
          }
        
        } 
         if (product.id === 11) {
            if (label === '500W') {
                product.mainImageSrc = 'assets/mixers/mix21.jpg';
                product.options = [
                    { imageUrl: 'assets/mixers/mix21.jpg' },
                    { imageUrl: 'assets/mixers/mix22.jpeg' },
                    { imageUrl: 'assets/mixers/mix23.jpeg' },
                    { imageUrl: 'assets/mixers/mix24.jpeg' },
                    { imageUrl: 'assets/mixers/mix24.jpeg' }
                ];
                product.colors = [
                    {
                        backgroundColor: '#46A9CA',
                        imageUrl: 'assets/mixers/skumix1.jpeg',
                        active: true,
                        optionImages: [
                          { imageUrl: 'assets/mixers/skymix2.jpeg' },
                          { imageUrl: 'assets/mixers/skumix1.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                        ]
                    },
                    {
                        backgroundColor: '#7E5AC0',
                        imageUrl: 'assets/mixers/mix21.jpg',
                        active: false,
                        optionImages: [
                          { imageUrl: 'assets/mixers/mix21.jpg' },
                          { imageUrl: 'assets/mixers/mix22.jpg' },
                          { imageUrl: 'assets/mixers/mix23.jpg' },
                          { imageUrl: 'assets/mixers/mix24.jpg' },
                          { imageUrl: 'assets/mixers/mix24.jpg' }
                        ]
                    }
                ];
            }
            if (label === '750W') {
              product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
              product.options = [
                  { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                  { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#0B7977',
                      imageUrl: 'assets/mixers/greenmix1.jpeg',
                      active: true,
                      optionImages: [
                          { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: 'black',
                      imageUrl: 'assets/mixers/mixer2.1.jpg',
                      active: false,
                      optionImages: [
                          { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                          { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                      ]
                  }
              ];
          }
        
        } 
        if (product.id === 12) {
          if (label === '500W') {
              product.mainImageSrc = 'assets/mixers/mix21.jpg';
              product.options = [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#46A9CA',
                      imageUrl: 'assets/mixers/skumix1.jpeg',
                      active: true,
                      optionImages: [
                        { imageUrl: 'assets/mixers/skymix2.jpeg' },
                        { imageUrl: 'assets/mixers/skumix1.jpeg' },
                        { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                        { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                        { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: '#7E5AC0',
                      imageUrl: 'assets/mixers/mix21.jpg',
                      active: false,
                      optionImages: [
                        { imageUrl: 'assets/mixers/mix21.jpg' },
                        { imageUrl: 'assets/mixers/mix22.jpg' },
                        { imageUrl: 'assets/mixers/mix23.jpg' },
                        { imageUrl: 'assets/mixers/mix24.jpg' },
                        { imageUrl: 'assets/mixers/mix24.jpg' }
                      ]
                  }
              ];
          }
          if (label === '750W') {
            product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
            product.options = [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ];
            product.colors = [
                {
                    backgroundColor: '#0B7977',
                    imageUrl: 'assets/mixers/greenmix1.jpeg',
                    active: true,
                    optionImages: [
                        { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                        { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                        { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                        { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                        { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                    ]
                },
                {
                    backgroundColor: 'black',
                    imageUrl: 'assets/mixers/mixer2.1.jpg',
                    active: false,
                    optionImages: [
                        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                    ]
                }
            ];
        }
      
      } 
      if (product.id === 13) {
        if (label === '500W') {
            product.mainImageSrc = 'assets/mixers/mix21.jpg';
            product.options = [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpeg' },
                { imageUrl: 'assets/mixers/mix23.jpeg' },
                { imageUrl: 'assets/mixers/mix24.jpeg' },
                { imageUrl: 'assets/mixers/mix24.jpeg' }
            ];
            product.colors = [
                {
                    backgroundColor: '#46A9CA',
                    imageUrl: 'assets/mixers/skumix1.jpeg',
                    active: true,
                    optionImages: [
                      { imageUrl: 'assets/mixers/skymix2.jpeg' },
                      { imageUrl: 'assets/mixers/skumix1.jpeg' },
                      { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                      { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                      { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                    ]
                },
                {
                    backgroundColor: '#7E5AC0',
                    imageUrl: 'assets/mixers/mix21.jpg',
                    active: false,
                    optionImages: [
                      { imageUrl: 'assets/mixers/mix21.jpg' },
                      { imageUrl: 'assets/mixers/mix22.jpg' },
                      { imageUrl: 'assets/mixers/mix23.jpg' },
                      { imageUrl: 'assets/mixers/mix24.jpg' },
                      { imageUrl: 'assets/mixers/mix24.jpg' }
                    ]
                }
            ];
        }
        if (label === '750W') {
          product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
          product.options = [
              { imageUrl: 'assets/mixers/mixer2.1.jpg' },
              { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
              { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
              { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
              { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
          ];
          product.colors = [
              {
                  backgroundColor: '#0B7977',
                  imageUrl: 'assets/mixers/greenmix1.jpeg',
                  active: true,
                  optionImages: [
                      { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                      { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                      { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                      { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                      { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                  ]
              },
              {
                  backgroundColor: 'black',
                  imageUrl: 'assets/mixers/mixer2.1.jpg',
                  active: false,
                  optionImages: [
                      { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                      { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                      { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                      { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                      { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                  ]
              }
          ];
      }
    
    } 
    if (product.id === 14) {
      if (label === '500W') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
              { imageUrl: 'assets/mixers/mix21.jpg' },
              { imageUrl: 'assets/mixers/mix22.jpeg' },
              { imageUrl: 'assets/mixers/mix23.jpeg' },
              { imageUrl: 'assets/mixers/mix24.jpeg' },
              { imageUrl: 'assets/mixers/mix24.jpeg' }
          ];
          product.colors = [
              {
                  backgroundColor: '#46A9CA',
                  imageUrl: 'assets/mixers/skumix1.jpeg',
                  active: true,
                  optionImages: [
                    { imageUrl: 'assets/mixers/skymix2.jpeg' },
                    { imageUrl: 'assets/mixers/skumix1.jpeg' },
                    { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                    { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                    { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                  ]
              },
              {
                  backgroundColor: '#7E5AC0',
                  imageUrl: 'assets/mixers/mix21.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/mixers/mix21.jpg' },
                    { imageUrl: 'assets/mixers/mix22.jpg' },
                    { imageUrl: 'assets/mixers/mix23.jpg' },
                    { imageUrl: 'assets/mixers/mix24.jpg' },
                    { imageUrl: 'assets/mixers/mix24.jpg' }
                  ]
              }
          ];
      }
      if (label === '750W') {
        product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
        product.options = [
            { imageUrl: 'assets/mixers/mixer2.1.jpg' },
            { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
            { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
        ];
        product.colors = [
            {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: true,
                optionImages: [
                    { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                    { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                    { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                    { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                    { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                ]
            },
            {
                backgroundColor: 'black',
                imageUrl: 'assets/mixers/mixer2.1.jpg',
                active: false,
                optionImages: [
                    { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                    { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                    { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                    { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                    { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                ]
            }
        ];
    }
  
  } 
  if (product.id === 15) {
    if (label === '500W') {
        product.mainImageSrc = 'assets/mixers/mix21.jpg';
        product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' }
        ];
        product.colors = [
            {
                backgroundColor: '#46A9CA',
                imageUrl: 'assets/mixers/skumix1.jpeg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/mixers/skymix2.jpeg' },
                  { imageUrl: 'assets/mixers/skumix1.jpeg' },
                  { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                  { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                  { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                ]
            },
            {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpg' },
                  { imageUrl: 'assets/mixers/mix23.jpg' },
                  { imageUrl: 'assets/mixers/mix24.jpg' },
                  { imageUrl: 'assets/mixers/mix24.jpg' }
                ]
            }
        ];
    }
    if (label === '750W') {
      product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mixer2.1.jpg' },
          { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
          { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
          { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
          { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#0B7977',
              imageUrl: 'assets/mixers/greenmix1.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                  { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                  { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                  { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                  { imageUrl: 'assets/mixers/greenmix5.jpeg' }
              ]
          },
          {
              backgroundColor: 'black',
              imageUrl: 'assets/mixers/mixer2.1.jpg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                  { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
              ]
          }
      ];
  }

} 
if (product.id === 16) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 17) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 18) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 19) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 20) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 21) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 22) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 23) {
  if (label === '500W') {
      product.mainImageSrc = 'assets/mixers/mix21.jpg';
      product.options = [
          { imageUrl: 'assets/mixers/mix21.jpg' },
          { imageUrl: 'assets/mixers/mix22.jpeg' },
          { imageUrl: 'assets/mixers/mix23.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' },
          { imageUrl: 'assets/mixers/mix24.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' }
              ]
          },
          {
              backgroundColor: '#7E5AC0',
              imageUrl: 'assets/mixers/mix21.jpg',
              active: false,
              optionImages: [
                { imageUrl: 'assets/mixers/mix21.jpg' },
                { imageUrl: 'assets/mixers/mix22.jpg' },
                { imageUrl: 'assets/mixers/mix23.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' },
                { imageUrl: 'assets/mixers/mix24.jpg' }
              ]
          }
      ];
  }
  if (label === '750W') {
    product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
    product.options = [
        { imageUrl: 'assets/mixers/mixer2.1.jpg' },
        { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
        { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#0B7977',
            imageUrl: 'assets/mixers/greenmix1.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                { imageUrl: 'assets/mixers/greenmix5.jpeg' }
            ]
        },
        {
            backgroundColor: 'black',
            imageUrl: 'assets/mixers/mixer2.1.jpg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
            ]
        }
    ];
}

} 
 if (product.id === 24) {
            if (label === '500W') {
                product.mainImageSrc = 'assets/mixers/mix21.jpg';
                product.options = [
                    { imageUrl: 'assets/mixers/mix21.jpg' },
                    { imageUrl: 'assets/mixers/mix22.jpeg' },
                    { imageUrl: 'assets/mixers/mix23.jpeg' },
                    { imageUrl: 'assets/mixers/mix24.jpeg' },
                    { imageUrl: 'assets/mixers/mix24.jpeg' }
                ];
                product.colors = [
                    {
                        backgroundColor: '#46A9CA',
                        imageUrl: 'assets/mixers/skumix1.jpeg',
                        active: true,
                        optionImages: [
                          { imageUrl: 'assets/mixers/skymix2.jpeg' },
                          { imageUrl: 'assets/mixers/skumix1.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                          { imageUrl: 'assets/mixers/sktmix5.jpeg' }
                        ]
                    },
                    {
                        backgroundColor: '#7E5AC0',
                        imageUrl: 'assets/mixers/mix21.jpg',
                        active: false,
                        optionImages: [
                          { imageUrl: 'assets/mixers/mix21.jpg' },
                          { imageUrl: 'assets/mixers/mix22.jpg' },
                          { imageUrl: 'assets/mixers/mix23.jpg' },
                          { imageUrl: 'assets/mixers/mix24.jpg' },
                          { imageUrl: 'assets/mixers/mix24.jpg' }
                        ]
                    }
                ];
            }
            if (label === '750W') {
              product.mainImageSrc = 'assets/mixers/mixer2.1.jpg';
              product.options = [
                  { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                  { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                  { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#0B7977',
                      imageUrl: 'assets/mixers/greenmix1.jpeg',
                      active: true,
                      optionImages: [
                          { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix2.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix3.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix4.jpeg' },
                          { imageUrl: 'assets/mixers/greenmix5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: 'black',
                      imageUrl: 'assets/mixers/mixer2.1.jpg',
                      active: false,
                      optionImages: [
                          { imageUrl: 'assets/mixers/mixer2.1.jpg' },
                          { imageUrl: 'assets/mixers/mixer2.3.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.2.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.4.jpeg' },
                          { imageUrl: 'assets/mixers/mixer2.5.jpeg' }
                      ]
                  }
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
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }               
      if (product.id === 2) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 3) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           





      if (product.id === 4) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 5) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 6) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 7) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 8) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 9) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 10) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           





      if (product.id === 11) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 12) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }     
      if (product.id === 13) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      } 
      if (product.id === 14) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }                           
      if (product.id === 15) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 16) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 17) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 18) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 19) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 20) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 21) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 22) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 23) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
        } 
      }           
      if (product.id === 24) {
        if (label === '3') {
          product.mainImageSrc = 'assets/mixers/mix21.jpg';
          product.options = [
            { imageUrl: 'assets/mixers/mix21.jpg' },
            { imageUrl: 'assets/mixers/mix22.jpeg' },
            { imageUrl: 'assets/mixers/mix23.jpeg' },
            { imageUrl: 'assets/mixers/mix24.jpeg' },
            { imageUrl: 'assets/mixers/mix25.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#46A9CA',
              imageUrl: 'assets/mixers/skumix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/skumix1.jpeg' },
                { imageUrl: 'assets/mixers/skymix2.jpeg' },
                { imageUrl: 'assets/mixers/sktmix3.jpeg' },
                { imageUrl: 'assets/mixers/sktmix4.jpeg' },
                { imageUrl: 'assets/mixers/sktmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#7E5AC0',
                imageUrl: 'assets/mixers/mix21.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/mixers/mix21.jpg' },
                  { imageUrl: 'assets/mixers/mix22.jpeg' },
                  { imageUrl: 'assets/mixers/mix23.jpeg' },
                  { imageUrl: 'assets/mixers/mix24.jpeg' },
                  { imageUrl: 'assets/mixers/mix25.jpeg' },
                ]
              }
            ]
        } 
        if (label === '4') {
          product.mainImageSrc = 'assets/mixers/greenmix1.jpeg';
          product.options = [
            { imageUrl: 'assets/mixers/greenmix1.jpeg' },
            { imageUrl: 'assets/mixers/greenmix2.jpeg' },
            { imageUrl: 'assets/mixers/greenmix3.jpeg' },
            { imageUrl: 'assets/mixers/greenmix4.jpeg' },
            { imageUrl: 'assets/mixers/greenmix5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#C83760',
              imageUrl: 'assets/mixers/pinkmix1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/mixers/pinkmix1.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix2.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix3.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix4.jpeg' },
                { imageUrl: 'assets/mixers/pinkmix5.jpeg' },
              ]
              },
              {
                backgroundColor: '#0B7977',
                imageUrl: 'assets/mixers/greenmix1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg '},
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                 { imageUrl: 'assets/mixers/greenmix1.jpeg' },
                ]
              }
            ]
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
