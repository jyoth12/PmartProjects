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

interface TypeOption {
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
  type: TypeOption[];
  selectedType?: string;
}

@Component({
  selector: 'app-sectionalsofaset',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './sectionalsofaset.component.html',
  styleUrl: './sectionalsofaset.component.css'
})
export class SectionalsofasetComponent {
  cartItemCount: number=0;
  products: Product[] = [
    //card1
    {
      id: 1,
      title: 'sofa1',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa1.avif',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN sofa..',
      options: [
        { imageUrl: 'assets/SofaSet Images/sofa1.1.jpg' },
        { imageUrl: 'assets/SofaSet Images/sofa1.2.jpg' },
        { imageUrl: 'assets/SofaSet Images/sofa1.3.jpg' },
        { imageUrl: 'assets/SofaSet Images/sofa1.4.jpg' },
        { imageUrl: 'assets/SofaSet Images/sofa1.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/SofaSet Images/greysofa1.jpg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/SofaSet Images/greysofa1.1.jpg' },
            { imageUrl: 'assets/SofaSet Images/greysofa1.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/greysofa1.3.jpg' },
            { imageUrl: 'assets/SofaSet Images/greysofa1.4.jpg' },
            { imageUrl: 'assets/SofaSet Images/greysofa1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#505050',
          imageUrl: 'assets/SofaSet Images/thick greysofa1.webp',
          active: false,
          optionImages: [
            { imageUrl: 'assets/SofaSet Images/thick greysofa1.1.jpg' },
            { imageUrl: 'assets/SofaSet Images/thick greysofa1.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/thick greysofa1.3.jpg' },
            { imageUrl: 'assets/SofaSet Images/thick greysofa1.4.jpg' },
            { imageUrl: 'assets/SofaSet Images/thick greysofa1.5.jpg' },
          ]
        }
      ],
      capacity: [
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      
      showAdditionalContent: false,

    
    
    },
    //card2
    {
      id: 2,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa2.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
  
    
    
    },
    //card3
    {
      id: 3,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa3.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
    
    
    },
    //card4
    {
      id: 4,
      title: 'sofa',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,

     
    },
    //card5
    {
      id: 5,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa5.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,

    
    },
    //card6
    {
      id: 6,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa6.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
    
    },
    //card7
    {
      id: 7,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa7.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
   
    
    },
    //card8
    {
      id: 8,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa8.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
    
    
    },
    //card9
    {
      id: 9,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa9.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
  
    },
    //card10
    {
      id: 10,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa10.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
 
  
    
    },
    //card11
    {
      id: 11,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa11.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
    
    
    },
    //card12
    {
      id: 12,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa12.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
 
  
    
    },
    //card13
    {
      id: 13,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa13.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
  
    
    
    },
    //card14
    {
      id: 14,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa14.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
     
    
    },
    //card15
    {
      id: 15,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa15.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
  
   
    
    },
    //card16
    {
      id: 16,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa16.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
  

    
    },
    //card17
    {
      id: 17,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa17.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
  
     
    
    },
    //card18
    {
      id: 18,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa18.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
  

    
    },
    //card19
    {
      id: 19,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa19.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
   
 
    
    },
    //card20
    {
      id: 20,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa20.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,

    
    
    },
    //card21
    {
      id: 21,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa21.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,


    
    },
    //card22
    {
      id: 22,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa22.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
 
  
    
    },
    //card23
    {
      id: 23,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa18.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
 
    
    
    },
    //card24
    {
      id: 24,
      title: 'sofa',
      price: '₹XXXX',
      imageUrl: 'assets/SofaSet Images/sofa24.jpg',
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
        { label: 'seater1', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'seater2', active: true, price: '₹22,599', description: 'lorem2' },
        { label: 'seater3', active: true, price: '₹22,599', description: 'lorem3' },
      ],
      type: [
        { label: '3+1+1', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '3+2', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      showAdditionalContent: false,
  
     
    
    }
  ];
 

 
//type......3+1+1 and 4+2..................................
  selectType(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
  
    // Iterate through each type option
    product.type.forEach(typeOption => {
      typeOption.active = (typeOption.label === label);
      if (typeOption.active) {
        // Set product's price, description, and selected type
        product.price = typeOption.price;
        product.description = typeOption.description;
        product.selectedType = label;
  
        // Update product's main image and options based on product id
        if (product.id === 1) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        } else if (product.id === 2) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 3) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 4) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 5) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 6) {
          // Adjust logic for product with id 2 if needed
        }
        else if (product.id === 7) {
          // Adjust logic for product with id 2 if needed
        }
        else if (product.id === 8) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 9) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 10) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 11) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 12) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 13) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 14) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 15) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 16) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 17) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 18) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 19) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 20) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 21) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 22) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 23) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        else if (product.id === 24) {
          if (label === '3+1+1') {
            product.mainImageSrc = 'assets/SofaSet Images/type1.webp';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/type1.1.webp' },
              { imageUrl: 'assets/SofaSet Images/type1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.4.jpg' },
              { imageUrl: 'assets/SofaSet Images/type1.5.jpg' },

              // Add more option images as needed
            ];
            product. colors=[
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/type black1.jpg',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type  black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/type black 1.5.jpg' },
                ]
                },
                {
                  backgroundColor: '#C4A484',
                  imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                  ]
                }
              ]
          } else if (label === '3+2') {
            product.mainImageSrc = 'assets/SofaSet Images/3+2 img purple1.jpg';
            product.options = [
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.1.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple1.2.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.3.jpg' },
              { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/3+2 img purple 1.5.jpg' },

              
            ];
            product. colors=[
              {
                backgroundColor: '#C4A484',
                imageUrl: 'assets/SofaSet Images/type light brown1.webp',
                active: true,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/type light brown1.1.jpg' },
                ]
                },
                {
                  backgroundColor: '#90EE90',
                  imageUrl: 'assets/SofaSet Images/3+2 img.jpg',
                  active: false,
                  optionImages: [
                    { imageUrl: 'assets/SofaSet Images/3+2 img1.1.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.2.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.3.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.4.jpg' },
                    { imageUrl: 'assets/SofaSet Images/3+2 imggreen1.5.jpg' },
                  ]
                }
              ]
          }
        }
        return;
      }
    });
  }
  // capacity.....seater1,seater2 and seater3............................
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
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }

      } else if (product.id === 2) {
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }
      else if (product.id === 3) {
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }
      else if(product.id === 4){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }
      else if(product.id === 5){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }
      else if(product.id === 6){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }
      else if(product.id === 7){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 8){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 9){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 10){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 11){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 12){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 13){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 14){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 15){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 16){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 17){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 18){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 19){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 20){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }else if(product.id === 21){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }
      else if(product.id === 22){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }
      else if(product.id === 23){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
                ]
              }
            ]
        }
      }
      else if(product.id === 24){
        if (label === 'seater1') {
          product.mainImageSrc = 'assets/SofaSet Images/seater1.avif';
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater1.1.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.2.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.3.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.4.avif' },
            { imageUrl: 'assets/SofaSet Images/seater1.5.avif' },
          ];
          product. colors=[
            {
              backgroundColor: '#A52A2A',
              imageUrl: 'assets/SofaSet Images/seater1 brown1.avif',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater browm 1.1.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.2.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.3.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.4.avif' },
                { imageUrl: 'assets/SofaSet Images/seater brown 1.5.avif' },
              ]
              },
              {
                backgroundColor: '#ff0000',
                imageUrl: 'assets/SofaSet Images/seater 1 red1.avif',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.1.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.2.avif' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red1.3.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.4.webp' },
                  { imageUrl: 'assets/SofaSet Images/seater1 red 1.5.avif' },
                ]
              }
            ]
        } else if (label === 'seater2') {
          product.mainImageSrc = 'assets/SofaSet Images/seater2.webp'; 
          product.options = [
            { imageUrl: 'assets/SofaSet Images/seater2.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater 2.2.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater2.5.webp'},
          ];
          product. colors=[
            {
              backgroundColor: '#0000FF',
              imageUrl: 'assets/SofaSet Images/seater2 blue1.jpg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater2 blue1.1.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater2 blue 1.5.jpg' },
              ]
              },
              {
                backgroundColor: '#000',
                imageUrl: 'assets/SofaSet Images/seater2 black1.jpg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater2 black1.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater2 black 1.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater black 1.5.jpg' },
                ]
              }
            ]
        } else if (label === 'seater3') {
          product.mainImageSrc = 'assets/SofaSet Images/seater3.jpg';          
           product.options = [
            { imageUrl: 'assets/SofaSet Images/seater 3.1.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.2.jpg' },
            { imageUrl: 'assets/SofaSet Images/seater3.3.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.4.webp' },
            { imageUrl: 'assets/SofaSet Images/seater3.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: '#00EEEE',
              imageUrl: 'assets/SofaSet Images/seater aqua 1.webp',
              active: true,
              optionImages: [
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.1.webp' },
                { imageUrl: 'assets/SofaSet Images/seater3 aqua3.2.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.3.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.4.jpg' },
                { imageUrl: 'assets/SofaSet Images/seater aqua3.5.jpg' },
              ]
              },
              {
                backgroundColor:'#458D00',
                imageUrl: 'assets/SofaSet Images/seater grey3.webp',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.1.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.2.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.3.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 gray 3.4.jpg' },
                  { imageUrl: 'assets/SofaSet Images/seater3 grey 3.5.jpg' },
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


