import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
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
  selector: 'app-microwave',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './microwave.component.html',
  styleUrl: './microwave.component.css'
})
export class MicrowaveComponent {
  cartItemCount: number=0;
  products: Product[] = [
    //card1
    {
      id: 1,
      title: 'microwave',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave1.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN sofa..',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Microwave Images/microwave1.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave1.webp' },
            { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card2
    {
      id: 2,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave2.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    
    },
    //card3
    {
      id: 3,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave3.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    },
    //card4
    {
      id: 4,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave4.jpg',     
     description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
     options: [
      { imageUrl: 'assets/Microwave Images/microwave1.webp' },
      { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
      { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
      { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
      { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
    ],
    colors: [
      {
        backgroundColor: '#eee',
        imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
        active: true,
        optionImages: [
          { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
          { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
          { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
          { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
          { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
        ]
      },
      {
        backgroundColor: '#800080',
        imageUrl: 'assets/Microwave Images/microwave purple1.webp',
        active: false,
        optionImages: [
          { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
          { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
          { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
          { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
          { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
        ]
      }
    ],
    capacity: [
      { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
      { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
    ],
    showAdditionalContent: false,

    },
    //card5
    {
      id: 5,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave5.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card6
    {
      id: 6,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave6.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card7
    {
      id: 7,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave7.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
       options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card8
    {
      id: 8,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave8.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: '../../assets/Dell Laptops Images/black1.avif',
          active: true,
          optionImages: [
            { imageUrl: '../../assets/Dell Laptops Images/black1.1.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/black1.2.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/black1.3.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/black 1.4.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/black 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.jpg',
          active: false,
          optionImages: [
            { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.1.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.2.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.3.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.4.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
    
      showAdditionalContent: false,

    
    
    },
    //card9
    {
      id: 9,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave9.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    },
    //card10
    {
      id: 10,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave10.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    
    },
    //card11
    {
      id: 11,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave11.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    
    },
    //card12
    {
      id: 12,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave12.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card13
    {
      id: 13,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave13.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    
    },
    //card14
    {
      id: 14,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave14.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card15
    {
      id: 15,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave15.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card16
    {
      id: 16,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave16.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card17
    {
      id: 17,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave17.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    },
    //card18
    {
      id: 18,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave18.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,


    
    },
    //card19
    {
      id: 19,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave19.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    
    },
    //card20
    {
      id: 20,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave20.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card21
    {
      id: 21,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave21.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card22
    {
      id: 22,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave22.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    },
    //card23
    {
      id: 23,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave23.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    
    
    },
    //card24
    {
      id: 24,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Microwave Images/microwave24.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/Microwave Images/microwave1.webp' },
        { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
        { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Microwave Images/microwave gray 1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave gray 1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave gray 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/Microwave Images/microwave purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Microwave Images/microwave purple1.1.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '20L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '23L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    }
  ];


  // capacity.....  <!-- capacity 20,23L -->............................
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
        if (label === '20L') {
          product.mainImageSrc = 'assets/Microwave Images/microwave1.webp';
          product.options = [
            { imageUrl: 'assets/Microwave Images/microwave1.webp' },
            { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }

          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/Microwave Images/microwave1.webp'; 
          product.options = [
            { imageUrl: 'assets/Microwave Images/microwave1.webp' },
            { imageUrl: 'assets/Microwave Images/microwave1.2.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.3.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.4.jpg' },
            { imageUrl: 'assets/Microwave Images/microwave1.5.jpg' }
              ];
          
        }

      } 
      else if (product.id === 2) {
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      }
      else if (product.id === 3) {
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      }
      else if(product.id === 4){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }

      }else if(product.id === 9){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      }else if(product.id === 10){
    
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
       
      }else if(product.id === 11){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
       
      }else if(product.id === 12){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
        
      }else if(product.id === 13){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
        
      }else if(product.id === 14){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      
      }else if(product.id === 15){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
       
        
      }else if(product.id === 16){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        } 
      
      }else if(product.id === 17){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      }else if(product.id === 18){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      }else if(product.id === 19){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      }else if(product.id === 20){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      }else if(product.id === 21){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
   
      }
      else if(product.id === 22){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
        
      }
      else if(product.id === 23){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
        }
      }
      else if(product.id === 24){
        if (label === '20L') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }
          ];
        } else if (label === '23L') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
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


