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
  selector: 'app-swings',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './swings.component.html',
  styleUrl: './swings.component.css'
})
export class SwingsComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing1.jpeg',
      description: 'Swingzy Round Hanging for Kids & Adults Rope Chair for Home/ Cotton, Wooden Large Swing  (Black, Pre-assembled)',
      options: [
        { imageUrl: '/assets/swings/swing1.1.jpeg' },
        { imageUrl: '/assets/swings/swing1.2.jpeg' },
        { imageUrl: '/assets/swings/swing1.3.jpeg' },
        { imageUrl: '/assets/swings/swing1.4.jpeg' },
        { imageUrl: '/assets/swings/swing1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/swings/whiteswing1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/swings/whiteswing1.1.jpeg' },
            { imageUrl: 'assets/swings/whiteswing1.2.jpeg' },
            { imageUrl: 'assets/swings/whiteswing1.3.jpeg' },
            { imageUrl: 'assets/swings/whiteswing1.4.jpeg' },
            { imageUrl: 'assets/swings/whiteswing1.5.jpeg' },
          ]
        },
        {
          backgroundColor: '#ce6e2e',
          imageUrl: 'assets/swings/woodswing1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/swings/woodswing1.1.jpeg' },
            { imageUrl: 'assets/swings/woodswing1.2.jpeg' },
            { imageUrl: 'assets/swings/woodswing1.3.jpeg' },
            { imageUrl: 'assets/swings/woodswing1.4.jpeg' },
            { imageUrl: 'assets/swings/woodswing1.5.jpeg' }
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
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing2.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: 'assets/images/laptop6.jpeg' },
        { imageUrl: 'assets/images/laptop7.jpeg' },
        { imageUrl: 'assets/images/laptop8.jpeg' },
        { imageUrl: 'assets/images/laptop9.jpeg' },
        { imageUrl: 'assets/images/laptop10.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 3,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing3.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    
    },
    {
      id: 4,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing4.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: 'assets/images/laptop6.jpeg' },
        { imageUrl: 'assets/images/laptop7.jpeg' },
        { imageUrl: 'assets/images/laptop8.jpeg' },
        { imageUrl: 'assets/images/laptop9.jpeg' },
        { imageUrl: 'assets/images/laptop10.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
      
    },
    {
      id: 5,
      title: 'Swing',
      price: '₹xxxx',
      imageUrl: '/assets/swings/swing5.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 6,
      title: 'Swing',
      price: '₹xxxx',
      imageUrl: '/assets/swings/swing6.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
     
    },
    {
      id: 7,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing7.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 8,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing8.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: 'assets/images/laptop6.jpeg' },
        { imageUrl: 'assets/images/laptop7.jpeg' },
        { imageUrl: 'assets/images/laptop8.jpeg' },
        { imageUrl: 'assets/images/laptop9.jpeg' },
        { imageUrl: 'assets/images/laptop10.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: 'inch' }, { label: ' inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 9,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing9.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: ' inch' }, { label: ' inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
     
    },
    {
      id: 10,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing10.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: 'assets/images/laptop6.jpeg' },
        { imageUrl: 'assets/images/laptop7.jpeg' },
        { imageUrl: 'assets/images/laptop8.jpeg' },
        { imageUrl: 'assets/images/laptop9.jpeg' },
        { imageUrl: 'assets/images/laptop10.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 11,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing11.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
      
      mainImageSrc: '',
      
    },
    {
      id: 12,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing12.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: 'assets/images/laptop6.jpeg' },
        { imageUrl: 'assets/images/laptop7.jpeg' },
        { imageUrl: 'assets/images/laptop8.jpeg' },
        { imageUrl: 'assets/images/laptop9.jpeg' },
        { imageUrl: 'assets/images/laptop10.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
      
      mainImageSrc: '',
     
    },
    {
      id: 13,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing13.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
    },
    {
      id: 14,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing14.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: 'assets/images/laptop6.jpeg' },
        { imageUrl: 'assets/images/laptop7.jpeg' },
        { imageUrl: 'assets/images/laptop8.jpeg' },
        { imageUrl: 'assets/images/laptop9.jpeg' },
        { imageUrl: 'assets/images/laptop10.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
      
      mainImageSrc: '',
      
    },
    {
      id: 15,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing15.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 16,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing16.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: 'assets/images/laptop6.jpeg' },
        { imageUrl: 'assets/images/laptop7.jpeg' },
        { imageUrl: 'assets/images/laptop8.jpeg' },
        { imageUrl: 'assets/images/laptop9.jpeg' },
        { imageUrl: 'assets/images/laptop10.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 17,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing17.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop5.jpeg' },
            { imageUrl: 'assets/images/laptop2.jpeg' },
            { imageUrl: 'assets/images/laptop3.jpeg' },
            { imageUrl: 'assets/images/laptop4.jpeg' },
            { imageUrl: 'assets/images/laptop1.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 18,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing18.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: 'assets/images/laptop6.jpeg' },
        { imageUrl: 'assets/images/laptop7.jpeg' },
        { imageUrl: 'assets/images/laptop8.jpeg' },
        { imageUrl: 'assets/images/laptop9.jpeg' },
        { imageUrl: 'assets/images/laptop10.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/laptop10.jpeg' },
            { imageUrl: 'assets/images/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 19,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing19.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
    },
    {
      id: 20,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing20.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
     
    },
    {
      id: 21,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing21.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 22,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing22.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
     
    },
    {
      id: 23,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing23.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      
    },
    {
      id: 24,
      title: 'Swing',
      price: '₹xxxxx',
      imageUrl: '/assets/swings/swing24.jpeg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/images/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        },
        {
          backgroundColor: 'red',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',

    },
    
    // Add more products similarly
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
