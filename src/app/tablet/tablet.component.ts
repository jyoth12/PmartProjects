import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
interface RamOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface SizeOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface ConnectivityOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

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
  sizes: SizeOption[];
  ram: RamOption[];
  connectivity: ConnectivityOption[];
  showAdditionalContent: boolean;
  quantity: number;
  screenSize: string;
  selectedSize?: string;
  selectedRam?: string;
  selectedConnectivity?: string;
}
@Component({
  selector: 'app-tablet',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './tablet.component.html',
  styleUrl: './tablet.component.css'
})
export class TabletComponent {
  cartItemCount:number=0;
  products: Product[] = [
  
    {
      id: 1,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab1',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '/assets/tablets/tab1.1' },
        { imageUrl: '/assets/tablets/tab1.2' },
        { imageUrl: '/assets/tablets/tab1.3' },
        { imageUrl: '/assets/tablets/tab1.4' },
        { imageUrl: '/assets/tablets/tab1.5' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: '/assets/tablets/tab1black',
          active: true,
          optionImages: [
            { imageUrl: '/assets/tablets/tab1.1black' },
            { imageUrl: '/assets/tablets/tab1.2black' },
            { imageUrl: '/assets/tablets/tab1.3black' },
            { imageUrl: '/assets/tablets/tab1.4black' },
            { imageUrl: '/assets/tablets/tab1.5black' }
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: '/assets/tablets/tab1sliver',
          active: false,
          optionImages: [
            { imageUrl: '/assets/tablets/tab1.1sliver' },
            { imageUrl: '/assets/tablets/tab1.2sliver' },
            { imageUrl: '/assets/tablets/tab1.3sliver' },
            { imageUrl: '/assets/tablets/tab1.4sliver' },
            { imageUrl: '/assets/tablets/tab1.5sliver' }
          ]
        }
      ],
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 2,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/3 best android tablets',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 3,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/apple ipad',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    {
      id: 4,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/apple tab',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 5,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab1.3sliver',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 6,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/fir hd 10',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 7,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/i kall N16',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 8,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/ipad',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 9,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/lenova',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 10,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/lenova M7 tab',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 11,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/lenova m10',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 12,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/lenova tab M8',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 13,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/lenova1',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 14,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/nokia',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 15,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab1.1sliver',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 16,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/samsung',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 17,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab1.1',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 18,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/small tab',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 19,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab1.1black',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 20,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab p12 pro',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 21,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab1.2sliver',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 22,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab2',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 23,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tcl',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch'
    },
    
    {
      id: 24,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '/assets/tablets/tab1.4sliver',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/Dell Laptops Images/delllaptop1.5.jpg' }
      ],
      //color images black,gray
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
      sizes: [
        { label: '126GB', active: false, price: '₹18,999', description: '' },
        { label: '258GB', active: true, price: '₹22,599', description: '' }
      ],
      ram: [
        { label: '8GB', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '16GB', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      connectivity: [
        { label: 'Wi-Fi only', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: 'Wi-Fi+4G', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
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
  
    selectSize(product: Product, label: string) {
      product.sizes.forEach(option => {
        option.active = (option.label === label);
        if (option.active) {
          product.price = option.price;
          product.description = option.description;
          product.selectedSize = label;
        }
      });
    }
  
    selectRam(product: Product, label: string) {
      product.ram.forEach(option => {
        option.active = (option.label === label);
        if (option.active) {
          product.price = option.price;
          product.description = option.description;
          product.selectedRam = label;
        }
      });
    }
  
    selectConnectivity(product: Product, label: string) {
      product.connectivity.forEach(option => {
        option.active = (option.label === label);
        if (option.active) {
          product.price = option.price;
          product.description = option.description;
          product.selectedConnectivity = label;
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

