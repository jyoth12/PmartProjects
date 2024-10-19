import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';


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
  sizes: { label: string; active?: boolean }[];
  showAdditionalContent: boolean;

  mainImageSrc?: string;
  // selectedSize?: string;
  // ramOptions: { label: string, description: string, price: string }[];
  // selectedRam?: string;
}

@Component({
  selector: 'app-vguard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './vguard.component.html',
  styleUrl: './vguard.component.css'
})
export class VguardComponent {

  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'Fan',
      price: '₹xxxx',
      imageUrl: '/assets/Fans/Fan1.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#ce6e2e',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' }
          ]
        },
       
      ],
      sizes: [{ label: '1.8 inch' }, { label: '49.784 mm' }],
      showAdditionalContent: false,
   
      mainImageSrc: '',
      // ramOptions: [
      //   { label: '16GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
      //   { label: '32GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
      // ]
    },
    {
      id: 2,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan2.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
   
      mainImageSrc: '',
    },
    {
      id: 3,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan3.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 4,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan4.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 5,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan5.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 6,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan6.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
    },
    {
      id: 7,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan7.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
      
      mainImageSrc: '',
    },
    {
      id: 8,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan8.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 9,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan9.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
    },
    {
      id: 10,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan10.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 11,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan11.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 12,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan12.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 13,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan13.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
    },
    {
      id: 14,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan14.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
   
      mainImageSrc: '',
    },
    {
      id: 15,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan15.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 16,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan16.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
    },
    {
      id: 17,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan17.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 18,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan18.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
  
      mainImageSrc: '',
    },
    {
      id: 19,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan19.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
    },
    {
      id: 20,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan20.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
    },
    {
      id: 21,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan21.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
   
      mainImageSrc: '',
    },
    {
      id: 22,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan22.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
    },
    {
      id: 23,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan23.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
   
      mainImageSrc: '',
    },
    {
      id: 24,
      title: 'Fan',
      price: '₹xxxxx',
      imageUrl: '/assets/Fans/Fan24.jpeg',
      description: 'DIGISMART Apsra 390 RPM High Speed Bee Approved with 5 Star 1200 mm Energy Saving 3 Blade Ceiling Fan  (BROWN, Pack of 1)',
      options: [
        { imageUrl: '/assets/Fans/Fan1.1.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.2.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.3.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.4.jpeg' },
        { imageUrl: '/assets/Fans/Fan1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Fans/white Fan1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Fans/white Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/white Fan1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/Fans/color Fan1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Fans/color Fan1.1.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.2.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.3.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.4.jpeg' },
            { imageUrl: 'assets/Fans/color Fan1.5.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
  ];

  toggleAdditionalContent(product: Product) {
    product.showAdditionalContent = !product.showAdditionalContent;
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
    product.options = color.optionImages;
    product.mainImageSrc = color.imageUrl;
  }


  // selectSize(product: Product, size: string) {
  //   product.selectedSize = size;
  //   this.updateProductDetailsBySize(product, size);
  // }

  // selectRam(product: Product, ram: string) {
  //   product.selectedRam = ram;
  //   this.updateProductDetailsByRam(product, ram);
  // }

  // updateProductDetailsByRam(product: Product, ram: string) {
  //   const selectedOption = product.ramOptions.find(option => option.label === ram);
  //   if (selectedOption) {
  //     product.description = selectedOption.description;
  //     product.price = selectedOption.price;
  //   } else {
  //     console.error(No details found for RAM: ${ram});
  //   }
  // }

  updateProductDetailsBySize(product: Product, size: string) {
    // Implement if needed
  }


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
