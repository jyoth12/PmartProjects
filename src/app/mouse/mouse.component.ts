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
  sizeOptions: { label: string, description: string, price: string }[];
}


@Component({
  selector: 'app-mouse',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './mouse.component.html',
  styleUrl: './mouse.component.css'
})
export class MouseComponent {

  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: ' Mouse ',
      price: '₹xxxx',
      imageUrl: 'assets/computeraccessories mouse/mouse1.jpeg',
      description: 'Logitech B175 / Optical Tracking, 12-Months Battery Life, Ambidextrous Wireless Optical Mouse  (2.4GHz Wireless, Black)',
      options: [
        { imageUrl: 'assets/computeraccessories mouse/mouse1.1.jpeg' },
        { imageUrl: 'assets/computeraccessories mouse/mouse1.2.jpeg' },
        { imageUrl: 'assets/computeraccessories mouse/mouse1.3.jpeg' },
        { imageUrl: 'assets/computeraccessories mouse/mouse1.4.jpeg' },
        { imageUrl: 'assets/computeraccessories mouse/mouse1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'black',
          imageUrl: 'assets/computeraccessories mouse/blackmouse1.jpeg',
          active: true,

          optionImages: [
            { imageUrl: 'assets/computeraccessories mouse/blackmouse1.1.jpeg' },
            { imageUrl: 'assets/computeraccessories mouse/blackmouse1.2.jpeg' },
            { imageUrl: 'assets/computeraccessories mouse/blackmouse1.3.jpeg' },
            { imageUrl: 'assets/computeraccessories mouse/blackmouse1.4.jpeg' },
            { imageUrl: 'assets/computeraccessories mouse/blackmouse1.5.jpeg' }
          ]
        },
        {
          backgroundColor: 'white',
          imageUrl: 'assets/computeraccessories mouse/whitemouse1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/computeraccessories mouse/whitemouse1.1.jpeg' },
            { imageUrl: 'assets/computeraccessories mouse/whitemouse1.2.jpeg' },
            { imageUrl: 'assets/computeraccessories mouse/whitemouse1.3.jpeg' },
            { imageUrl: 'assets/computeraccessories mouse/whitemouse1.4.jpeg' },
            { imageUrl: 'assets/computeraccessories mouse/whitemouse1.5.jpeg' }
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
    
      mainImageSrc: '',
      selectedSize: '',
      sizeOptions: [
        { label: '14 inch', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 14 inch', price: '₹3,999' },
        { label: '15.6 inch', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 15.6 inch', price: '₹3,499' }
      ]
    },
    {
      id: 2,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse2.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 3,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse3.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 4,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse4.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 5,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse5.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 6,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse6.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 7,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse7.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 8,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse8.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 9,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse9.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 10,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse10.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 11,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse11.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 12,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse12.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 13,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse13.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 14,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse14.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 15,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse15.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 16,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse16.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 17,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse17.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 18,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse18.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 19,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse19.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 20,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse20.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 21,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse21.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 22,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse22.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 23,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse23.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
    },
    {
      id: 24,
      title: 'Mouse',
      price: '₹1,099',
      imageUrl: 'assets/computeraccessories mouse/mouse24.jpeg',
      description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size)',
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
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 15.6 inch', price: '₹1,099' },
        { label: '17 inch', description: 'Boult Drift BT Calling 1.69 ,HD Display,140+ Watchfaces,475Nits Brightness, IP67 Smartwatch  (Peach Strap, Free Size) 17 inch', price: '₹1,599' }
      ]
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
  
  updateProductDetailsBySize(product: Product, size: string) {
    const selectedOption = product.sizeOptions.find(option => option.label === size);
    if (selectedOption) {
      product.description = selectedOption.description;
      product.price = selectedOption.price;
    } else {
      console.error(`No details found for size: ${size}`);
    }
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
