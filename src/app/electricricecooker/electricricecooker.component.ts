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
  selector: 'app-electricricecooker',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './electricricecooker.component.html',
  styleUrl: './electricricecooker.component.css'
})
export class ElectricricecookerComponent {
  cartItemCount: number=0;
  products: Product[] = [
    //card1
    {
      id: 1,
      title: 'electrical cooker',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN sofa..',
      options: [
        { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
        { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
        { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
        { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
        { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    },
    //card2
    {
      id: 2,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker2.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    
    },
    //card3
    {
      id: 3,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker3.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   
    },
    //card4
    {
      id: 4,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker4.jpg',     
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
        backgroundColor: '#fff',
        imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
        active: true,
        optionImages: [
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
        ]
      },
      {
        backgroundColor: '#000',
        imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
        active: true,
        optionImages: [
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
        ]
      },
      {
        backgroundColor: '#eee',
        imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
        active: false,
        optionImages: [
          { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
          { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
        ]
      }
    ],
    capacity: [
      { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
      { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
    ],
    showAdditionalContent: false,

    },
    //card5
    {
      id: 5,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker5.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card6
    {
      id: 6,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker6.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   
    },
    //card7
    {
      id: 7,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker7.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
    
    
    },
    //card8
    {
      id: 8,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker8.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
    
      showAdditionalContent: false,
   
    
    
    },
    //card9
    {
      id: 9,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker9.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    },
    //card10
    {
      id: 10,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker10.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    
    },
    //card11
    {
      id: 11,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker11.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
    
    
    },
    //card12
    {
      id: 12,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker12.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    
    },
    //card13
    {
      id: 13,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker13.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card14
    {
      id: 14,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker14.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   
    
    },
    //card15
    {
      id: 15,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker15.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    
    },
    //card16
    {
      id: 16,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker16.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],  showAdditionalContent: false,
  
    
    },
    //card17
    {
      id: 17,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker17.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
    
    },
    //card18
    {
      id: 18,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker18.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   

    
    },
    //card19
    {
      id: 19,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker19.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
  
    
    },
    //card20
    {
      id: 20,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker20.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card21
    {
      id: 21,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker21.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
   
    },
    //card22
    {
      id: 22,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker22.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    },
    //card23
    {
      id: 23,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker23.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,
 
    
    
    },
    //card24
    {
      id: 24,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/Electrical Cooker Images/electrical cooker24.jpg',
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
          backgroundColor: '#fff',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.png',
          active: true,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical grey cooker1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: '1.5L', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '1.8L', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      showAdditionalContent: false,

    }
  ];




  // capacity.....  <!-- capacity 1.5,1.8L, --> ............................
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
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }

      } 
      else if (product.id === 2) {
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }
      }
      else if (product.id === 3) {
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }
      }
      else if(product.id === 4){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }

      }
      else if(product.id === 5){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }

      }
      else if(product.id === 6){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }

      }
      else if(product.id === 7){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }

      }
      else if(product.id === 8){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }

      }
      else if(product.id === 9){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }
      }else if(product.id === 10){
    
       if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }
       
      }else if(product.id === 11){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ];
          
        }
       
      }else if(product.id === 12){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
        
      }else if(product.id === 13){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      }else if(product.id === 14){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      
      }else if(product.id === 15){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
       
        
      }else if(product.id === 16){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      }else if(product.id === 17){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      }else if(product.id === 18){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      }else if(product.id === 19){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      }else if(product.id === 20){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      }else if(product.id === 21){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
   
      }
      else if(product.id === 22){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      }
      else if(product.id === 23){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
        }
      }
      else if(product.id === 24){
        if (label === '1.5L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg';
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }

          ];
        } else if (label === '1.8L') {
          product.mainImageSrc = 'assets/Electrical Cooker Images/electrical cooker1.jpg'; 
          product.options = [
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.1.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.2.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.3.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.4.jpg' },
            { imageUrl: 'assets/Electrical Cooker Images/electrical cooker1.5.jpg' }
              ]
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



