import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
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
  selector: 'app-diningtable',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './diningtable.component.html',
  styleUrl: './diningtable.component.css'
})
export class DiningtableComponent {
  cartItemCount: number=0;
  products: Product[] = [
    //card1
    {
      id: 1,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining table1.webp',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN sofa..',
      options: [
        { imageUrl: 'assets/diningset images/dining table1.1.webp' },
        { imageUrl: 'assets/diningset images/dining table1.2.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.3.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.4.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/diningset images/dining table black1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/diningset images/dining table black1.1.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.2.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.3.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.4.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#FFFDD0',
          imageUrl: 'assets/diningset images/dining table cream1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/diningset images/dining table cream1.1.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.2.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.3.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.4.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
    
    
    
    },
    //card2
    {
      id: 2,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set2.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/diningset images/dining table1.1.webp' },
        { imageUrl: 'assets/diningset images/dining table1.2.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.3.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.4.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/diningset images/dining table black1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/diningset images/dining table black1.1.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.2.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.3.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.4.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#FFFDD0',
          imageUrl: 'assets/diningset images/dining table cream1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/diningset images/dining table cream1.1.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.2.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.3.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.4.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
  
    
    
    },
    //card3
    {
      id: 3,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set3.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/diningset images/dining table1.1.webp' },
        { imageUrl: 'assets/diningset images/dining table1.2.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.3.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.4.jpg' },
        { imageUrl: 'assets/diningset images/dining table1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/diningset images/dining table black1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/diningset images/dining table black1.1.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.2.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.3.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.4.jpg' },
            { imageUrl: 'assets/diningset images/dining table black1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#FFFDD0',
          imageUrl: 'assets/diningset images/dining table cream1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/diningset images/dining table cream1.1.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.2.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.3.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.4.jpg' },
            { imageUrl: 'assets/diningset images/dining table cream1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      
      showAdditionalContent: false,
  
    
    
    },
    //card4
    {
      id: 4,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa4.jpg',     
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
    
     
    },
    //card5
    {
      id: 5,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set5.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
    
    
    },
    //card6
    {
      id: 6,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set6.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      
      showAdditionalContent: false,
  
    
    },
    //card7
    {
      id: 7,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set7.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
    
   
    
    },
    //card8
    {
      id: 8,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set8.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
    
      showAdditionalContent: false,
 
    
    
    },
    //card9
    {
      id: 9,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set9.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,

  
    },
    //card10
    {
      id: 10,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set10.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
  
  
    
    },
    //card11
    {
      id: 11,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set11.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
  
    
    
    },
    //card12
    {
      id: 12,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set12.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
    
  
    
    },
    //card13
    {
      id: 13,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set13.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      
      showAdditionalContent: false,
  
    
    
    },
    //card14
    {
      id: 14,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set14.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      
      showAdditionalContent: false,
  
     
    
    },
    //card15
    {
      id: 15,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set15.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
 
   
    
    },
    //card16
    {
      id: 16,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set16.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
   

    
    },
    //card17
    {
      id: 17,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set17.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
  
     
    
    },
    //card18
    {
      id: 18,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set18.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      
      showAdditionalContent: false,
 

    
    },
    //card19
    {
      id: 19,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set19.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
 
 
    
    },
    //card20
    {
      id: 20,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set20.webp',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
 
    
    
    },
    //card21
    {
      id: 21,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set21.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
  

    
    },
    //card22
    {
      id: 22,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set22.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      
      showAdditionalContent: false,

  
    
    },
    //card23
    {
      id: 23,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set23.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
     
      showAdditionalContent: false,
     
    
    
    },
    //card24
    {
      id: 24,
      title: 'dining1',
      price: '₹XXXX',
      imageUrl: 'assets/diningset images/dining set24.jpg',
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
        { label: 'seater4', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater6', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      
      showAdditionalContent: false,
   
     
    
    }
  ];



  // constructor() {}

  // capacity.....seater4,seater6 ............................
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
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        }

      } 
      else if (product.id === 2) {
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        }

      }
      else if (product.id === 3) {
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
      
        } 
       
      }
      else if(product.id === 4){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
      
        } 
       
        
      }else if(product.id === 9){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
        else if (label === 'seater6') {
          product.mainImageSrc = 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/l/0/d/left-facing-76-black-183-chenille-50-no-tq8-brownie-73-black-original-imagz647havr4guf.jpeg?q=70'; 
          product.options = [
            { imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/5/c/n/76-2-0-black-imitation-leather-3-1-1-184-15-0-87-63-36-22-0-abot-original-imagx8ju24nys54v.jpeg?q=70' },
            { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.2.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.3.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: 'pink',
              imageUrl: 'https://rukminim2.flixcart.com/image/612/612/ku1k4280/sofa-sectional/t/x/s/symmetrical-86-grey-polyester-135-27-easesofafabgr2s-duroflex-original-imag79a4xevpaffr.jpeg?q=70',
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
                backgroundColor:'biscuit',
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
            ]
        }
      }else if(product.id === 10){
    
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
       
      }else if(product.id === 11){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
       
      }else if(product.id === 12){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
        
      }else if(product.id === 13){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
        
      }else if(product.id === 14){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
      
      }else if(product.id === 15){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
       
        
      }else if(product.id === 16){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
      
      }else if(product.id === 17){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
      }else if(product.id === 18){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 19){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
      }else if(product.id === 20){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
          ]
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
      
      }else if(product.id === 21){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
   
      }
      else if(product.id === 22){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
        
      }
      else if(product.id === 23){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        } 
       
      }
      else if(product.id === 24){
        if (label === 'seater4') {
          product.mainImageSrc = 'assets/diningset images/seater4.jpg';
          product.options = [
            { imageUrl: 'assets/diningset images/seater4.1.jpg' },
            { imageUrl: 'assets/diningset images/seater4.2.jpg' },
            { imageUrl: 'assets/diningset images/seater4.3.jpg' },
            { imageUrl: 'assets/diningset images/seater4.4.jpg' },
            { imageUrl: 'assets/diningset images/seater4.5.jpg' }

          ];
          product. colors=[
            {
              backgroundColor: '	#BE6400',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#FFA500',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
            ]
        
        
        } else if (label === 'seater6') {
          product.mainImageSrc = 'assets/diningset images/seater6.webp'; 
          product.options = [
            { imageUrl: 'assets/diningset images/seater6.1.jpg' },
            { imageUrl: 'assets/diningset images/seater6.2.jpg' },
            { imageUrl: 'assets/diningset images/seater6.3.jpg' },
            { imageUrl: 'assets/diningset images/seater6.4.jpg' },
            { imageUrl: 'assets/diningset images/seater6.5.jpg'}
          ];
          product. colors=[
            {
              backgroundColor: '#FFA500',
              imageUrl: 'assets/diningset images/seater4brown1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/diningset images/seater4brown1.1.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.2.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.3.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.4.jpg' },
                { imageUrl: 'assets/diningset images/seater4brown1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#BE6400',
                imageUrl: 'assets/diningset images/seater4orange1.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/diningset images/seater4orange1.1.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.2.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.3.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.4.jpg' },
                  { imageUrl: 'assets/diningset images/seater4orange1.5.jpg' },
                ]
              }
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



