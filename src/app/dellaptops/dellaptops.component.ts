import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
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
  quantity: number;
  mainImageSrc?: string;
  selectedSize?: string;
  selectedRam?: string;
  screenSize: string;
}
@Component({
  selector: 'app-dellaptops',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './dellaptops.component.html',
  styleUrl: './dellaptops.component.css'
})
export class DellaptopsComponent {
  cartItemCount:number=0;
  products: Product[] = [
    //card1...
    {
      id: 1,
      title: 'Dell Laptop 1',
      price: '₹XXXX',
      //card image url
      imageUrl: '../assets/delllaptops/dell laptop1.jpg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',//description
      //square images
      options: [
        { imageUrl: '../../assets/delllaptops/delllaptop1.1.jpg' },
        { imageUrl: '../../assets/delllaptops/delllaptop1.2.jpg' },
        { imageUrl: '../../assets/delllaptops/delllaptop1.3.jpg' },
        { imageUrl: '../../assets/delllaptops/delllaptop1.4.jpg' },
        { imageUrl: '../../assets/delllaptops/delllaptop1.5.jpg' }
      ],
      //color images black,gray
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: '../../assets/delllaptops/black1.avif',
          active: true,
          optionImages: [
            { imageUrl: '../../assets/delllaptops/black1.1.jpg' },
            { imageUrl: '../../assets/delllaptops/black1.2.jpg' },
            { imageUrl: '../../assets/delllaptops/black1.3.jpg' },
            { imageUrl: '../../assets/delllaptops/black 1.4.jpg' },
            { imageUrl: '../../assets/delllaptops/black 1.5.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: '../../assets/delllaptops/gray delllaptop1.jpg',
          active: false,
          optionImages: [
            { imageUrl: '../../assets/delllaptops/gray delllaptop1.1.jpg' },
            { imageUrl: '../../assets/delllaptops/gray delllaptop1.2.jpg' },
            { imageUrl: '../../assets/delllaptops/gray dell laptop 1.3.jpg' },
            { imageUrl: '../../assets/delllaptops/gray dell laptop 1.4.jpg' },
            { imageUrl: '../../assets/delllaptops/gray dell laptop1.5.jpg' },
          ]
        }
      ],
      //sizes
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      //ram
      ram: [{ label: '8GB' }, { label: '16GB' }],
      //modal content show and  hidden
      showAdditionalContent: false,
      //incre and decre quantity
      quantity: 1 ,
      //screen size 15 and 16 inches
      screenSize: '15.6 inch'
    },
    //card2...
    {
      id: 2,
      title: 'Dell Laptop2',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/dell laptop2.jpg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: '../../assets/delllaptops/dell laptop2.1.jpg' },
        { imageUrl: '../../assets/delllaptops/dell laptop2.2.jpg' },
        { imageUrl: '../../assets/delllaptops/dell laptop2.3.jpg' },
        { imageUrl: '../../assets/delllaptops/dell laptop2.4.jpg' },
        { imageUrl: '../../assets/delllaptops/delllaptop2.5.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/delllaptops/laptop7.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/delllaptops/laptop10.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop7.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop9.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop8.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop6.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/delllaptops/laptop10.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop7.jpeg' },
            { imageUrl: 'assets/images/laptop8.jpeg' },
            { imageUrl: 'assets/images/laptop9.jpeg' },
            { imageUrl: 'assets/images/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '17 inch'
    },
    //card3...
    {
      id: 3,
      title: 'dell Laptop3',
      price: '₹XXXXX',
      imageUrl: 'assets/delllaptops/black 1.5.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card4...
    {
      id: 4,
      title: 'Gaming Laptop',
      price: '₹xxxxx',
      imageUrl: '../../assets/delllaptops/gaming laptop4.avif',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card5
    {
      id: 5,
      title: ' dell Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/laptop5.png',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card6...
    {
      id: 6,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/delllaptop6.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor:'#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card7...
    {
      id: 7,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/delllaptop7.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
   // card8...
    {
      id: 8,
      title: 'dell Laptop8',
      price: '₹xxx',
      imageUrl: '../../assets/delllaptops/delllaptop8.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card9...
    {
      id: 9,
      title: 'Gaming Laptop',
      price: '₹xxx',
      imageUrl: '../../assets/delllaptops/delllaptop9.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card10..
    {
      id: 10,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/Dell Laptops Images/delllaptop10.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
  //card11...
    {
      id: 11,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/dell laptop11.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card12
    {
      id: 12,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/dell-inspiron-14-2-in-1-laptop 12.webp',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card13..
    {
      id: 13,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/dell laptop13.avif',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card14..
    {
      id: 14,
      title: 'Gaming Laptop',
      price: '₹xxx',
      imageUrl: '../../assets/delllaptops/dell laptop14.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card15..
    {
      id: 15,
      title: 'Gaming Laptop',
      price: '₹xxx',
      imageUrl: '../../assets/delllaptops/delllaptop15.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card16..
    {
      id: 16,
      title: 'Gaming Laptop',
      price: '₹xxx',
      imageUrl: '../../assets/delllaptops/delllaptop16.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card17..
    {
      id: 17,
      title: 'Gaming Laptop',
      price: '₹xxx',
      imageUrl: '../../assets/delllaptops/delllaptop17.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },  
    //card18..
    {
      id: 18,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/delllaptop18.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },  
    //card19..
    {
      id: 19,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/delllaptop19.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },  
    //card20..
    {
      id: 20,
      title: 'Gaming Laptop',
      price: '₹xxx',
      imageUrl: '../../assets/delllaptops/delllaptop20.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },  
    //card21..
    {
      id: 21,
      title: 'Gaming Laptop',
      price: '₹xxx',
      imageUrl: '../../assets/delllaptops/delllaptop21.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card22..
    {
      id: 22,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/delllaptop22.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card23..
    {
      id: 23,
      title: 'Gaming Laptop',
      price: '₹xxxx',
      imageUrl: '../../assets/delllaptops/delllaptop23.jpg',
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
          backgroundColor: '#000',
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
          backgroundColor: '#eee',
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
      quantity: 1,
      screenSize: '17 inch'
    },
    //card24..
    {
      id: 24,
      title: 'Gaming Laptop',
      price: '₹xxx',
      imageUrl: '../assets/delllaptops/delllaptop10.jpg',
      description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
      options: [
        { imageUrl: '../assets/delllaptops/delllaptop10.jpg' },
        { imageUrl: '../assets/delllaptops/delllaptop10.jpg' },
        { imageUrl: '../assets/delllaptops/delllaptop10.jpg' },
        { imageUrl: '../assets/delllaptops/delllaptop10.jpg' },
        { imageUrl: '../assets/delllaptops/delllaptop10.jpg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: '../assets/delllaptops/dell laptop3.jpg',
          active: true,
          optionImages: [
            { imageUrl: '../assets/delllaptops/dell laptop3.jpg' },
            { imageUrl: '../assets/delllaptops/dell laptop3.jpg' },
            { imageUrl: '../assets/delllaptops/dell laptop3.jpg' },
            { imageUrl: '../assets/delllaptops/dell laptop3.jpg' },
            { imageUrl: '../assets/delllaptops/dell laptop3.jpg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/images/laptop8.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/delllaptops/laptop10.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop7.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop8.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop9.jpeg' },
            { imageUrl: 'assets/delllaptops/laptop6.jpeg' },
          ]
        }
      ],
      sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
      ram: [{ label: '16GB' }, { label: '32GB' }],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '17 inch'
    }
    // Add more products as needed
  ];
  //  Modal for additional content  in show and close it will perform  X-ICON
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
//incre and decre quantity
  increaseQuantity(product: Product) {
    product.quantity += 1;
  }

  decreaseQuantity(product: Product) {
    if (product.quantity > 1) {
      product.quantity -= 1;
    }
  }
//size changes
  selectSize(product: Product, size: string) {
    product.selectedSize = size;
    this.updateProductDetailsBySize(product, size);
  }
//ram changes
  selectRam(product: Product, ram: string) {
    product.selectedRam = ram;
    this.updateProductDetailsByRam(product, ram);
  }
//screen size
  filterProductsBySize(size: string) {
    this.products.forEach(product => {
      if (product.screenSize === size) {
        // Implement filtering logic as needed
      }
    });
  }
//ram changes 8GB & 16GB based on id 1,2,3....
  updateProductDetailsByRam(product: Product, ram: string) {
    // Define the details for each product
    const productDetails: { [key: number]: { [key: string]: { description: string, price: string } } } = {
      1: {
        '8GB': {
          description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM',
          price: '₹XXX1'
        },
        '16GB': {
          description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM',
          price: '₹XXXX'
        }
      },
      2: {
        '16GB': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM',
           price: '₹XXXX'
        },
        '32GB': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM',
        price: '₹XXXX'
        }
      },
      4: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
           price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
         price: '₹XXXX'
        }
      },
      5: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
       price: '₹XXXX'
        }
      },
      6: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      7: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
           price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
        price: '₹XXXX'
        }
      },
      8: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      9: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹XXXX'
        }
      },
      10: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      11: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
           price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      12: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹XXXX'
        }
      },
      13: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹29,999'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹XXXX'
        }
      },
      14: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      15: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹XXXX'
        }
      },
      16: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      17: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹XXXX'
        }
      },
      18: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
         price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹XXXX'
        }
      },
      19: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
          price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      20: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
           price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      21: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
            price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
          price: '₹34,999'
        }
      },
      22: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
            price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      23: {
        '8GB': {
          description: 'Product 4 with 8GB RAM description',
           price: '₹XXXX'
        },
        '16GB': {
          description: 'Product 4 with 16GB RAM description',
           price: '₹XXXX'
        }
      },
      24: {
        '16GB': {
          description: 'Product 4 with 8GB RAM description LAVANYA MADHURO DASARI',
            price: '₹XXXX'
        },
        '32GB': {
          description: 'Product 4 with 16GB RAM description DASARI',
            price: '₹XXXX'
        }
      },
      // Add cases for other products similarly
      
    };

    // Log the product details object for debugging
    console.log('Product details object:', productDetails);

    // Log the product ID and RAM for debugging
    console.log('Product ID:', product.id);
    console.log('Selected RAM:', ram);

    // Update the product details based on the selected RAM...
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
//screen changes 14 inch & 15.6inch based on id 1,2,3....
  updateProductDetailsBySize(product: Product, size: string) {
    // Define the details for each product
    const productDetails: { [key: number]: { [key: string]: { description: string, price: string } } } = {
      1: {
        '14 inch': {
          description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 14 inch',
          price: '₹XXX1'
        },
        '15.6 inch': {
          description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 15.6 inch',
            price: '₹XXXX'
        }
      },
      2: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      3: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      4: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      5: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
            price: '₹XXXX'
        }
      },
      6: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      7: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      8: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
       9: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
            price: '₹XXXX'
        }
      },
      10: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
            price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      11: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
          price: '₹64,999'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      12: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      13: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
            price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      14: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
            price: '₹XXXX'
        }
      },
      15: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
            price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      16: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
            price: '₹XXXX'
        }
      },
      17: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
            price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      18: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
            price: '₹XXXX'
        }
      },
      19: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      20: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
            price: '₹XXXX'
        }
      },
      21: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
           price: '₹XXXX'
        }
      },
      22: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
          price: '₹74,999'
        }
      },
      23: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
            price: '₹XXXX'
        }
      },
      24: {
        '15.6 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 15.6 inch 16GB RAM',
           price: '₹XXXX'
        },
        '17 inch': {
          description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 17 inch 32GB RAM',
            price: '₹XXXX'
        }
      }
      // Add cases for other products similarly
   
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











// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { catchError, of } from 'rxjs';
// import { CommonModule } from '@angular/common';
// import { ActivatedRoute, RouterLink } from '@angular/router';

// @Component({
//   selector: 'app-dellaptops',
//   standalone: true,
//   imports: [CommonModule,RouterLink],
//   templateUrl: './dellaptops.component.html',
//   styleUrls: ['./dellaptops.component.css']
// })
// export class DellaptopsComponent implements OnInit {
//   laptops: any[] = [];
//   selectedLaptop: any;
//   showLoginForm = false;
  
//   constructor(private http: HttpClient,private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.fetchDellLaptops();
//   }

//   fetchDellLaptops(): void {
//     this.http.get<any[]>('http://localhost:3000/api/dellaptops').pipe(
//       catchError(error => {
//         console.error('Error fetching Dell laptops:', error);
//         return of([]);
//       })
//     ).subscribe(data => this.laptops = data);
//   }

//   showLoginPopup(): void {
//     this.showLoginForm = true;
//   }

//   hideLoginPopup(): void {
//     this.showLoginForm = false;
//   }

//   toggleAdditionalContent(product: any): void {
//     product.showAdditionalContent = !product.showAdditionalContent;
//   }

//   changeMainImage(product: any, imageUrl: string): void {
//     product.mainImageSrc = imageUrl;
//   }

//   changeColor(product: any, color: any): void {
//     // Update color-related logic here
//   }

//   selectSize(product: any, size: string): void {
//     product.selectedSize = size;
//   }

//   selectRam(product: any, ram: string): void {
//     product.selectedRam = ram;
//   }

//   increaseQuantity(product: any): void {
//     product.quantity = (product.quantity || 0) + 1;
//   }

//   decreaseQuantity(product: any): void {
//     if (product.quantity > 1) {
//       product.quantity--;
//     }
//   }

//   addToCart(product: any): void {
//     // Add to cart logic here
//   }
// }