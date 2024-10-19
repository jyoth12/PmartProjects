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
  selectedSize?: string;
  // ramOptions: { label: string, description: string, price: string }[];
  // selectedRam?: string;
}



@Component({
  selector: 'app-shoerack',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './shoerack.component.html',
  styleUrl: './shoerack.component.css'
})
export class ShoerackComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack1.jpeg',
      description: 'FLIPZON Iron and Fabric Multi-Purpose Shoe Rack, 5 Shelf Metal Shoe Stand  (Grey, 5 Shelves, DIY(Do-It-Yourself))',
      options: [
        { imageUrl: '/assets/Shoe Racks/Shoe Rack1.1.jpeg' },
        { imageUrl: '/assets/Shoe Racks/Shoe Rack1.2.jpeg' },
        { imageUrl: '/assets/Shoe Racks/Shoe Rack1.3.jpeg' },
        { imageUrl: '/assets/Shoe Racks/Shoe Rack1.4.jpeg' },
        { imageUrl: '/assets/Shoe Racks/Shoe Rack1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'white',
          imageUrl: 'assets/Shoe Racks/wood Shoe Rack1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Shoe Racks/wood Shoe Rack1.1.jpeg' },
            { imageUrl: 'assets/Shoe Racks/wood Shoe Rack1.2.jpeg' },
            { imageUrl: 'assets/Shoe Racks/wood Shoe Rack1.3.jpeg' },
            { imageUrl: 'assets/Shoe Racks/wood Shoe Rack1.4.jpeg' },
            { imageUrl: 'assets/Shoe Racks/wood Shoe Rack1.5.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/Shoe Racks/color Shoe Rack1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Shoe Racks/color Shoe Rack1.1.jpeg' },
            { imageUrl: 'assets/Shoe Racks/color Shoe Rack1.2.jpeg' },
            { imageUrl: 'assets/Shoe Racks/color Shoe Rack1.3.jpeg' },
            { imageUrl: 'assets/Shoe Racks/color Shoe Rack1.4.jpeg' },
            { imageUrl: 'assets/Shoe Racks/color Shoe Rack1.5.jpeg' }
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack2.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack3.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack4.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack5.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack6.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack7.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack8.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack9.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack10.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack11.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack12.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack13.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack14.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack15.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack16.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack17.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack18.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack19.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack20.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack21.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack22.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack23.jpeg',
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
      title: 'Shoe Rack',
      price: '₹xxxxx',
      imageUrl: '/assets/Shoe Racks/Shoe Rack24.jpeg',
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

  selectSize(product: Product, size: string) {
    product.selectedSize = size;
    this.updateProductDetailsBySize(product, size);
  }

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
