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
  selector: 'app-washingmachine',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './washingmachine.component.html',
  styleUrl: './washingmachine.component.css'
})
export class WashingmachineComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    //card1
    {
      id: 1,
      title: 'WashingMachine',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN sofa..',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
    
    },
    //card2
    {
      id: 2,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine2.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card3
    {
      id: 3,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine3.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    },
    //card4
    {
      id: 4,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine4.jpg',     
     description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
     options: [
      { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
      { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
      { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
      { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
      { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
    ],
    colors: [
      {
        backgroundColor: '#000',
        imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
        active: true,
        optionImages: [
          { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
        ]
      },
      {
        backgroundColor: '#eee',
        imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
        active: true,
        optionImages: [
          { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
        ]
      },
      {
        backgroundColor: '#800080',
        imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
        active: false,
        optionImages: [
          { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
          { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
        ]
      }
    ],
    capacity: [
      { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
      { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
      { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
    ],
    showAdditionalContent: false,

    },
    //card5
    {
      id: 5,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine5.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   
    },
    //card6
    {
      id: 6,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine6.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   
    },
    //card7
    {
      id: 7,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine7.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   
    
    },
    //card8
    {
      id: 8,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine8.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
    
      showAdditionalContent: false,
  
    
    
    },
    //card9
    {
      id: 9,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine9.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   
    },
    //card10
    {
      id: 10,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine10.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card11
    {
      id: 11,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine11.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card12
    {
      id: 12,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine12.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card13
    {
      id: 13,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine13.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card14
    {
      id: 14,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine14.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    
    },
    //card15
    {
      id: 15,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine10.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card16
    {
      id: 16,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine16.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    
    },
    //card17
    {
      id: 17,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine17.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card18
    {
      id: 18,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine18.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,


    
    },
    //card19
    {
      id: 19,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine19.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    
    },
    //card20
    {
      id: 20,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine20.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card21
    {
      id: 21,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine21.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card22
    {
      id: 22,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine22.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
    
    },
    //card23
    {
      id: 23,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine23.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    
    },
    //card24
    {
      id: 24,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/washingmachine images/washingmachine24.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
        { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/washingmachine images/washingmachine1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/washingmachine images/washingmachinegrey1.avif',
          active: true,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#800080',
          imageUrl: 'assets/washingmachine images/washingmachine purple1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '6kg', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '6.5kg', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '7kg', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    }
  ];


 

  // capacity.....  <!-- capacity 6,6.5,7kg -->............................
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
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }

      } 
      else if (product.id === 2) {
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }
      else if (product.id === 3) {
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }
      else if(product.id === 4){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }

      }else if(product.id === 9){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }else if(product.id === 10){
    
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
       
      }else if(product.id === 11){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }else if(product.id === 12){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
        
      }else if(product.id === 13){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
        
      }else if(product.id === 14){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      
      }else if(product.id === 15){
         if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
        
      }else if(product.id === 16){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      
      }else if(product.id === 17){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }else if(product.id === 18){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }else if(product.id === 19){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }else if(product.id === 20){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }else if(product.id === 21){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }
      else if(product.id === 22){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }
      else if(product.id === 23){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
              ];               
        }
      }
      else if(product.id === 24){
        if (label === '6kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine1.jpg';
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine1.5.jpg' }
          ];
        } else if (label === '6.5kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachinegrey1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachinegrey1.5.jpg' },
              ];               
        }
        else if (label === '7kg') {
          product.mainImageSrc = 'assets/washingmachine images/washingmachine purple1.1.jpg'; 
          product.options = [
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.1.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.2.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.3.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.4.jpg' },
            { imageUrl: 'assets/washingmachine images/washingmachine purple1.5.jpg' },
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


