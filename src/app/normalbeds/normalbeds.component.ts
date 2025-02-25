import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
interface storageOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface sizeOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

// interface ConnectivityOption {
//   label: string;
//   active: boolean;
//   price: string;
//   description: string;
// }

interface ColorOption {
  backgroundColor: string;
  imageUrl: string;
  active: boolean;
  optionImages: { imageUrl: string }[];
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
  sizes: sizeOption[];
  storage: storageOption[];
  showAdditionalContent: boolean;
  quantity: number;
  screenSize: string;
  selectedSize?: string;
  selectedstorage?: string;
}
@Component({
  selector: 'app-normalbeds',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './normalbeds.component.html',
  styleUrl: './normalbeds.component.css'
})
export class NormalbedsComponent {
  cartItemCount:number=0;
  products: Product[] = [
    {
      id: 1,
      title: 'Bed1',
      price: '₹22,599',
      //card image url
      imageUrl: 'assets/beds/bed1.webp',
      description: 'Perfect Homes Opus Engineered Wood Queen Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.webp' },
        { imageUrl: 'assets/beds/bed1.webp' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed2.jpeg' },
            { imageUrl: 'assets/images/bed3.jpeg' },
            { imageUrl: 'assets/images/bed4.jpeg' },
            { imageUrl: 'assets/images/bed5.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹25,599', description: 'Perfect Homes Opus Engineered Wood King Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'Perfect Homes Opus Engineered Wood Queen Box Bed  (Finish Color - American Espresso, Delivery Condition - Knock Down)' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '', description: '' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 2,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed2.webp',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 3,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed3.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 4,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed4.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 5,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed5.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 6,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed10.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 7,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed11.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 8,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed13.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },


    {
      id: 9,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed14.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 10,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed17.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 11,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed15.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 12,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed17.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 13,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed19.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 14,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed11.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 15,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed22.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 16,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed112.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 17,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bedw2.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 18,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bedw1.jpeg',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 19,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed1.webp',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 20,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed1.webp',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 21,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed1.webp',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 22,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed1.webp',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 23,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed1.webp',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 24,
      title: 'Bed1',
      price: '₹XXXX',
      //card image url
      imageUrl: 'assets/beds/bed1.webp',
      description: '',//description
      //square images
      options: [
        { imageUrl: 'assets/beds/bed5.jpeg' },
        { imageUrl: 'assets/beds/bed4.jpeg' },
        { imageUrl: 'assets/beds/bed3.jpeg' },
        { imageUrl: 'assets/beds/bed2.jpeg' },
        { imageUrl: 'assets/beds/bed1.jpeg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/bed2.webp',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/bed1.webp' },
            { imageUrl: 'assets/beds/bed2.webp' },
            { imageUrl: 'assets/beds/bed3.jpeg' },
            { imageUrl: 'assets/beds/bed4.jpeg' },
            { imageUrl: 'assets/beds/bed5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/bed3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
            { imageUrl: 'assets/images/bed1.jpeg' },
          ]
        }
      ],
      sizes: [
        { label: 'King', active: false, price: '₹18,999', description: '' },
        { label: 'Queen', active: true, price: '₹22,599', description: '' }
      ],
      storage: [
        { label: 'Yes', active: true, price: '₹18,999', description: '8GB RAM description' },
      
      ],
     
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
  ]
  toggleAdditionalContent(product: Product) {
    product.showAdditionalContent = !product.showAdditionalContent;
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

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity--;
    }
  }

  increaseQuantity(product: Product) {
    product.quantity++;
  }

  // selectSize(product: Product, label: string) {
  //   product.sizes.forEach(option => {
  //     option.active = (option.label === label);
  //     if (option.active) {
  //       product.price = option.price;
  //       product.description = option.description;
  //       product.selectedSize = label;
  //     }
  //   });
  // }
  selectSize(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';

    // Find the selected size option
    const selectedSizeOption = product.sizes.find(sizeOption => sizeOption.label === label);

    if (selectedSizeOption) {
        // Update product's selected size
        product.selectedSize = label;

        // Update product's main image and options based on product id and size label
        switch (product.id) {
            case 1:
                if (label === 'King') {
                    product.mainImageSrc = 'assets/images/bed1.jpeg';
                    product.options = [
                        { imageUrl: 'assets/images/bed3.jpeg' },
                        { imageUrl: 'assets/images/bed2.jpeg' },
                        { imageUrl: 'assets/images/bed3.jpeg' },
                        { imageUrl: 'assets/images/bed4.jpeg' },
                        { imageUrl: 'assets/images/bed5.jpeg' }
                    ];
                    product.colors = [
                        {
                            backgroundColor: '#000',
                            imageUrl: 'assets/images/bed5.jpeg',
                            active: true,
                            optionImages: [
                                { imageUrl: 'assets/images/bed2.jpeg' },
                                { imageUrl: 'assets/images/bed1.jpeg' },
                                { imageUrl: 'assets/images/bed4.jpeg' },
                                { imageUrl: 'assets/images/bed5.jpeg' },
                                { imageUrl: 'assets/images/bed3.jpeg' }
                            ]
                        },
                        {
                            backgroundColor: 'red',
                            imageUrl: 'assets/images/bed2.jpeg',
                            active: false,
                            optionImages: [
                                { imageUrl: 'assets/images/bed5.jpeg' },
                                { imageUrl: 'assets/images/bed4.jpeg' },
                                { imageUrl: 'assets/images/bed3.jpeg' },
                                { imageUrl: 'assets/images/bed2.jpeg' },
                                { imageUrl: 'assets/images/bed1.jpeg' }
                            ]
                        }
                    ];
                } else if (label === 'Queen') {
                    product.mainImageSrc = 'assets/images/bed3.jpeg'; 
                    product.options = [
                        { imageUrl: 'assets/images/bed3.jpeg' },
                        { imageUrl: 'assets/images/bed4.jpeg' },
                        { imageUrl: 'assets/images/bed2.jpeg' },
                        { imageUrl: 'assets/images/bed1.jpeg' }
                    ];
                    product.colors = [
                        {
                            backgroundColor: 'green',
                            imageUrl: 'assets/images/bed3.jpeg',
                            active: true,
                            optionImages: [
                                { imageUrl: 'assets/images/bed1.jpeg' },
                                { imageUrl: 'assets/images/bed2.jpeg' },
                                { imageUrl: 'assets/images/bed4.jpeg' },
                                { imageUrl: 'assets/images/bed5.jpeg' },
                                { imageUrl: 'assets/images/bed3.jpeg' }
                            ]
                        },
                        {
                            backgroundColor: 'yellow',
                            imageUrl: 'assets/images/bed2.jpeg',
                            active: false,
                            optionImages: [
                                { imageUrl: 'assets/images/bed2.jpeg' },
                                { imageUrl: 'assets/images/bed1.jpeg' },
                                { imageUrl: 'assets/images/bed5.jpeg' },
                                { imageUrl: 'assets/images/bed4.jpeg' },
                                { imageUrl: 'assets/images/bed3.jpeg' }
                            ]
                        }
                    ];
                }
                break;
            case 4:
                if (label === 'king') {
                    product.mainImageSrc = 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/s/t/b/right-facing-76-orange-183-chenille-50-no-tq8-brownie-73-orange-original-imagz646z9effmkg.jpeg?q=70';
                    product.options = [
                        { imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/5/c/n/76-2-0-black-imitation-leather-3-1-1-184-15-0-87-63-36-22-0-abot-original-imagx8ju24nys54v.jpeg?q=70' },
                        { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.2.jpg' },
                        { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.3.jpg' },
                        { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.4.jpg' },
                        { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop1.5.jpg' }
                    ];
                    product.colors = [
                        {
                            backgroundColor: 'green',
                            imageUrl: '../../assets/Dell Laptops Images/black1.avif',
                            active: true,
                            optionImages: [
                                { imageUrl: '../../assets/Dell Laptops Images/black1.1.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/black1.2.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/black1.3.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/black 1.4.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/black 1.5.jpg' }
                            ]
                        },
                        {
                            backgroundColor: 'blue',
                            imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.jpg',
                            active: false,
                            optionImages: [
                                { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.1.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.2.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.3.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.4.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop1.5.jpg' }
                            ]
                        }
                    ];
                } else if (label === 'Queen') {
                    product.mainImageSrc = 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/n/9/k/-original-imagqz22h8qqmwfy.jpeg?q=70'; 
                    product.options = [
                        { imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/5/c/n/76-2-0-black-imitation-leather-3-1-1-184-15-0-87-63-36-22-0-abot-original-imagx8ju24nys54v.jpeg?q=70' },
                        { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.3.jpg' },
                        { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.4.jpg' },
                        { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop1.5.jpg' }
                    ];
                    product.colors = [
                        {
                            backgroundColor: 'green',
                            imageUrl: '../../assets/Dell Laptops Images/black1.avif',
                            active: true,
                            optionImages: [
                                { imageUrl: '../../assets/Dell Laptops Images/black1.1.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/black1.2.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/black1.3.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/black 1.4.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/black 1.5.jpg' }
                            ]
                        },
                        {
                            backgroundColor: 'yellow',
                            imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.jpg',
                            active: false,
                            optionImages: [
                                { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.1.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.2.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.3.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.4.jpg' },
                                { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop1.5.jpg' }
                            ]
                        }
                    ];
                }
                break;
            // Add more cases for other product IDs if needed
        }

        // Update product price and description with selected option
        product.price = selectedSizeOption.price;
        product.description = selectedSizeOption.description;
    }
}

  selectRam(product: Product, label: string) {
    product.storage.forEach(option => {
      option.active = (option.label === label);
      if (option.active) {
        product.price = option.price;
        product.description = option.description;
        product.selectedstorage = label;
      }
    });
  }
  //wish list...............
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
