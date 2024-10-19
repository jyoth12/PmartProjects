import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';
interface sizeOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface ThicknessOption {
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
  screenSize: string; 
  size: sizeOption[];
  selectedsize?: string;
  Thickness: ThicknessOption[];
  selectedThickness?: string;
}
@Component({
  selector: 'app-wardrobs',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './wardrobs.component.html',
  styleUrl: './wardrobs.component.css'
})
export class WardrobsComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'Wardrobe',
      price: '₹XXXX',
      imageUrl: 'assets/beds/warblack1.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe1.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe3.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe2.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe4.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe5.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe6.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe8.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe9.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe10.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },


    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe13.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe14.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe15.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe16.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe17.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe18.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe19.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe21.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe20.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe1.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe1.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe1.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe1.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'Wardrobe ',
      price: '₹XXXX',
      imageUrl: 'assets/wardrobes/wardrobe1.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/warblack1.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.2.jpeg' },
        { imageUrl: 'assets/beds/warblack1.3.jpeg' },
        { imageUrl: 'assets/beds/warblack1.4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/warwhite1.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/warwhite1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
            { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
          ]
        },
        {
          backgroundColor: 'black',
          imageUrl: 'assets/beds/warblack1.1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
          ]
        }
      ],
      size: [
        { label: '2', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '3', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: 'No', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: 'Yes', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    
  ];

  selectThickness(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected thickness option
    const selectedThicknessOption = product.Thickness.find(thicknessOption => thicknessOption.label === label);
    
    if (selectedThicknessOption) {
        // Update product's selected thickness
        product.selectedThickness = label;
        
        // Update product's main image and options based on product id
        if (product.id === 1) {
            if (label === 'No') {
                product.mainImageSrc = 'assets/beds/brown3.1.jpeg';
                product.options = [
                    { imageUrl: 'assets/beds/brown3.1.jpeg' },
                    { imageUrl: 'assets/beds/brown3.2.jpeg' },
                    { imageUrl: 'assets/beds/brown3.3.jpeg' },
                    { imageUrl: 'assets/beds/brown3.4.jpeg' },
                    { imageUrl: 'assets/beds/brown3.5.jpeg' }
                ];
                product.colors = [
                    {
                        backgroundColor: '#000',
                        imageUrl: 'assets/beds/warblack1.1.jpeg',
                        active: true,
                        optionImages: [
                            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
                            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
                            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
                            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
                            { imageUrl: 'assets/beds/warblack1.5.jpeg' }
                        ]
                    },
                    {
                        backgroundColor: 'white',
                        imageUrl: 'assets/beds/white3.1.jpeg',
                        active: false,
                        optionImages: [
                            { imageUrl: 'assets/beds/white3.1.jpeg' },
                            { imageUrl: 'assets/beds/white3.2.jpeg' },
                            { imageUrl: 'assets/beds/white3.3.jpeg' },
                            { imageUrl: 'assets/beds/white3.4.jpeg' },
                            { imageUrl: 'assets/beds/white3.5.jpeg' }
                        ]
                    }
                ];
            }
            if (label === 'Yes') {
              product.mainImageSrc = 'assets/beds/whitemirror1.jpeg';
              product.options = [
                  { imageUrl: 'assets/beds/whitemirror2.jpeg' },
                  { imageUrl: 'assets/beds/whitemirror3.jpeg' },
                  { imageUrl: 'assets/beds/whitemirror4.jpeg' },
                  { imageUrl: 'assets/beds/whitemirror1.jpeg' },
                  { imageUrl: 'assets/beds/whitemirror5.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: 'black',
                      imageUrl: 'assets/beds/blackmirror1.jpeg',
                      active: true,
                      optionImages: [
                          { imageUrl: 'assets/beds/blackmirror5.jpeg' },
                          { imageUrl: 'assets/beds/blackmirror4.jpeg' },
                          { imageUrl: 'assets/beds/blackmirror3.jpeg' },
                          { imageUrl: 'assets/beds/blackmirror1.jpeg' },
                          { imageUrl: 'assets/beds/blackmirror2.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: '#C49977',
                      imageUrl: 'assets/beds/brownmirror1.jpeg',
                      active: false,
                      optionImages: [
                          { imageUrl: 'assets/beds/brownmirror2.jpeg' },
                          { imageUrl: 'assets/beds/brownmirror3.jpeg' },
                          { imageUrl: 'assets/beds/brownmirror4.jpeg' },
                          { imageUrl: 'assets/beds/brownmirror1.jpeg' },
                          { imageUrl: 'assets/beds/brownmirror5.jpeg' }
                      ]
                  }
              ];
          }
        
        } 
  
    }
}


  selectsize(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected capacity option
    const selectedsizeOption = product.size.find(sizeoption => sizeoption.label === label);
    
    if (selectedsizeOption) {
      // Update product's selected capacity
      product.selectedsize = label;
      
      // Update product's main image and options based on product id
      if (product.id === 1) {
        if (label === '2') {
          product.mainImageSrc = 'assets/beds/warblack1.1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/warblack1.1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.2.jpeg' },
            { imageUrl: 'assets/beds/warblack1.jpeg' },
            { imageUrl: 'assets/beds/warblack1.3.jpeg' },
            { imageUrl: 'assets/beds/warblack1.4.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'white',
              imageUrl: 'assets/beds/warwhite1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/warwhite1.jpeg' },
                { imageUrl: 'assets/beds/warwhite1.1.jpeg' },
                { imageUrl: 'assets/beds/warwhite1.2.jpeg' },
                { imageUrl: 'assets/beds/warwhite1.4.jpeg' },
                { imageUrl: 'assets/beds/warwhite1.3.jpeg' },
              ]
              },
              {
                backgroundColor: 'black',
                imageUrl: 'assets/beds/warblack1.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/warblack1.jpeg' },
                  { imageUrl: 'assets/beds/warblack1.1.jpeg' },
                  { imageUrl: 'assets/beds/warblack1.4.jpeg' },
                  { imageUrl: 'assets/beds/warblack1.3.jpeg' },
                  { imageUrl: 'assets/beds/warblack1.2.jpeg' },
                ]
              }
            ]
        } 
        if (label === '3') {
          product.mainImageSrc = 'assets/beds/brown3.1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/brown3.1.jpeg' },
            { imageUrl: 'assets/beds/brown3.2.jpeg' },
            { imageUrl: 'assets/beds/brown3.3.jpeg' },
            { imageUrl: 'assets/beds/brown3.4.jpeg' },
            { imageUrl: 'assets/beds/brown3.5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'white',
              imageUrl: 'assets/beds/white3.1.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/white3.1.jpeg' },
                { imageUrl: 'assets/beds/white3.5.jpeg' },
                { imageUrl: 'assets/beds/white3.4.jpeg' },
                { imageUrl: 'assets/beds/white3.3.jpeg' },
                { imageUrl: 'assets/beds/white3.2.jpeg' },
              ]
              },
              {
                backgroundColor: '#BE805C',
                imageUrl: 'assets/beds/brown3.1.jpeg',
                active: false,
                optionImages: [
                 { imageUrl: 'assets/beds/brown3.1.jpeg' },
                 { imageUrl: 'assets/beds/brown3.2.jpeg' },
                 { imageUrl: 'assets/beds/brown3.3.jpeg' },
                 { imageUrl: 'assets/beds/brown3.4.jpeg' },
                 { imageUrl: 'assets/beds/brown3.5.jpeg' },
                ]
              }
            ]
        } 
      }               
      product.price = selectedsizeOption.price;
      product.description = selectedsizeOption.description;
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
