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
  ram: { label: string; active?: boolean }[];
  showAdditionalContent: boolean;
 
  mainImageSrc?: string;
  selectedSize?: string;
  selectedRam?: string;
  screenSize: string;
}

@Component({
  selector: 'app-hplaptops',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './hplaptops.component.html',
  styleUrl: './hplaptops.component.css'
})
export class HplaptopsComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'Laptop 1',
      price: '₹xxxxx',
      imageUrl: 'assets/hplaptopimages/laptop1.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/hplaptopimages/laptop1.1.jpeg' },
        { imageUrl: 'assets/hplaptopimages/laptop1.2.jpeg' },
        { imageUrl: 'assets/hplaptopimages/laptop1.3.jpeg' },
        { imageUrl: 'assets/hplaptopimages/laptop1.4.jpeg' },
        { imageUrl: 'assets/hplaptopimages/laptop1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/hplaptopimages/blacklaptop1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/hplaptopimages/blacklaptop1.1.jpeg' },
            { imageUrl: 'assets/hplaptopimages/blacklaptop1.2.jpeg' },
            { imageUrl: 'assets/hplaptopimages/blacklaptop1.3.jpeg' },
            { imageUrl: 'assets/hplaptopimages/blacklaptop1.4.jpeg' },
            { imageUrl: 'assets/hplaptopimages/blacklaptop1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'gray',
          imageUrl: 'assets/hplaptopimages/graylaptop1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/hplaptopimages/graylaptop1.1.jpeg' },
            { imageUrl: 'assets/hplaptopimages/graylaptop1.2.jpeg' },
            { imageUrl: 'assets/hplaptopimages/graylaptop1.3.jpeg' },
            { imageUrl: 'assets/hplaptopimages/graylaptop1.4.jpeg' },
            { imageUrl: 'assets/hplaptopimages/graylaptop1.5.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      ram: [{ label: '8GB' }, { label: '16GB' }],
      showAdditionalContent: false,
     
      screenSize: '15.6 inch'
    },
    {
      id: 2,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop2.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
      
      screenSize: '17 inch'
    },
    {
      id: 3,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop3.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
   
      screenSize: '17 inch'
    },
    {
      id: 4,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop4.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
 
      screenSize: '17 inch'
    },
    {
      id: 5,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop5.jpeg',
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
        },
        
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
    
      screenSize: '17 inch'
    },
    {
      id: 6,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop6.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
   
      screenSize: '17 inch'
    },
    {
      id: 7,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop7.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
      
      screenSize: '17 inch'
    },
    {
      id: 8,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop8.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
     
      screenSize: '17 inch'
    },
    {
      id: 9,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop9.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
 
      screenSize: '17 inch'
    },
    {
      id: 10,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop10.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
    
      screenSize: '17 inch'
    },
    {
      id: 11,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop11.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
     
      screenSize: '17 inch'
    },
    {
      id: 12,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop12.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
    
      screenSize: '17 inch'
    },
    {
      id: 13,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop13.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
     
      screenSize: '17 inch'
    },
    {
      id: 14,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop14.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
   
      screenSize: '17 inch'
    },
    {
      id: 15,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop15.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
   
      screenSize: '17 inch'
    },
    {
      id: 16,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop16.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
  
      screenSize: '17 inch'
    },
    {
      id: 17,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop17.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
 
      screenSize: '17 inch'
    },  {
      id: 18,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop18.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
    
      screenSize: '17 inch'
    },  {
      id: 19,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop19.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
    
      screenSize: '17 inch'
    },  {
      id: 20,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop20.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
    
      screenSize: '17 inch'
    },  {
      id: 21,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop21.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
    
      screenSize: '17 inch'
    },
    {
      id: 22,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop22.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
 
      screenSize: '17 inch'
    },
    {
      id: 23,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop23.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
   
      screenSize: '17 inch'
    },
    {
      id: 24,
      title: 'Gaming Laptop',
      price: '₹64,999',
      imageUrl: 'assets/hplaptopimages/laptop24.jpeg',
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
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
    
      screenSize: '17 inch'
    }
    
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


  selectSize(product: Product, size: string) {
    product.selectedSize = size;
    this.updateProductDetailsBySize(product, size);
  }

  selectRam(product: Product, ram: string) {
    product.selectedRam = ram;
    this.updateProductDetailsByRam(product, ram);
  }

  filterProductsBySize(size: string) {
    this.products.forEach(product => {
      if (product.screenSize === size) {
        // Implement filtering logic as needed
      }
    });
  }

  updateProductDetailsByRam(product: Product, ram: string) {
    // Define the details for each product
    const productDetails: { [key: number]: { [key: string]: { description: string, price: string } } } = {
      1: {
        '8GB': {
          description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM',
          price: '₹34,999'
        },
        '16GB': {
          description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM',
          price: '₹39,999'
        }
      },
      2: {
        '16GB': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM',
          price: '₹64,999'
        },
        '32GB': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM',
          price: '₹74,999'
        }
      },
      4: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      5: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      6: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      7: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      8: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      9: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      10: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      11: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      12: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      13: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      14: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      15: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      16: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      17: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      18: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      19: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      20: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      21: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      22: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      23: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      24: {
        '16GB': {
          description: 'Product 4 with 8GB RAM description LAVANYA MADHURO DASARI',
          price: '₹29,999'
        },
        '32GB': {
          description: 'Product 4 with 16GB RAM description DASARI',
          price: '₹34,999'
        }
      },
      // Add cases for other products similarly
      // ...
    };

    // Log the product details object for debugging
    console.log('Product details object:', productDetails);

    // Log the product ID and RAM for debugging
    console.log('Product ID:', product.id);
    console.log('Selected RAM:', ram);

    // Update the product details based on the selected RAM
    const productRamDetails = productDetails[product.id];
    if (productRamDetails) {
      const details = productRamDetails[ram];
      if (details) {
        product.description = details.description;
        product.price = details.price;
      } else {
        console.error(`No details found for RAM: ${ram}`);
      }
    } else {
      console.error(`No details found for product ID: ${product.id}`);
    }
  }

  updateProductDetailsBySize(product: Product, size: string) {
    // Define the details for each product
    const productDetails: { [key: number]: { [key: string]: { description: string, price: string } } } = {
      1: {
        '14 inch': {
          description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 14 inch',
          price: '₹34,999'
        },
        '15.6 inch': {
          description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 15.6 inch',
          price: '₹39,999'
        }
      },
      2: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      3: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      4: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      5: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      6: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      7: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      8: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
       9: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      10: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      11: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      12: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      13: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      14: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      15: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      16: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      17: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      18: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      19: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      20: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      21: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      22: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      23: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      24: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      }
      // Add cases for other products similarly
      // ...
    };

    // Log the product details object for debugging
    console.log('Product details object:', productDetails);

    // Log the product ID and size for debugging
    console.log('Product ID:', product.id);
    console.log('Selected size:', size);

    // Update the product details based on the selected size
    const productSizeDetails = productDetails[product.id];
    if (productSizeDetails) {
      const details = productSizeDetails[size];
      if (details) {
        product.description = details.description;
        product.price = details.price;
      } else {
        console.error(`No details found for size: ${size}`);
      }
    } else {
      console.error(`No details found for product ID: ${product.id}`);
    }
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
