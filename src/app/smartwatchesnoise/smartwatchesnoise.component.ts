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
  selector: 'app-smartwatchesnoise',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './smartwatchesnoise.component.html',
  styleUrl: './smartwatchesnoise.component.css'
})
export class SmartwatchesnoiseComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: ' Noise Smart Wtach',
      price: '₹3,999',
      imageUrl: 'assets/smartwatchesnoise/noisewatch1.jpeg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: 'assets/smartwatchesnoise/noisewatch1.1.jpeg' },
        { imageUrl: 'assets/smartwatchesnoise/noisewatch1.2.jpeg' },
        { imageUrl: 'assets/smartwatchesnoise/noisewatch1.3.jpeg' },
        { imageUrl: 'assets/smartwatchesnoise/noisewatch1.4.jpeg' },
        { imageUrl: 'assets/smartwatchesnoise/noisewatch1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: 'assets/smartwatchesnoise/hexnoisewatch1.jpeg',
          active: true,

          optionImages: [
            { imageUrl: 'assets/smartwatchesnoise/hexnoisewatch1.1.jpeg' },
            { imageUrl: 'assets/smartwatchesnoise/hexnoisewatch1.2.jpeg' },
            { imageUrl: 'assets/smartwatchesnoise/hexnoisewatch1.3.jpeg' },
            { imageUrl: 'assets/smartwatchesnoise/hexnoisewatch1.4.jpeg' },
            { imageUrl: 'assets/smartwatchesnoise/hexnoisewatch1.5.jpeg' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: 'assets/smartwatchesnoise/pinknoisewatch1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/smartwatchesnoise/pinknoisewatch1.1.jpeg' },
            { imageUrl: 'assets/smartwatchesnoise/pinknoisewatch1.2.jpeg' },
            { imageUrl: 'assets/smartwatchesnoise/pinknoisewatch1.3.jpeg' },
            { imageUrl: 'assets/smartwatchesnoise/pinknoisewatch1.4.jpeg' },
            { imageUrl: 'assets/smartwatchesnoise/pinknoisewatch1.5.jpeg' }
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch2.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch3.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch4.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch5.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch6.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch7.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch8.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch9.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch10.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch11.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch12.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch13.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch14.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch15.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch16.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch17.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch18.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch19.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch20.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch21.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch22.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch23.jpeg',
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
      title: 'boult Drift ',
      price: '₹1,099',
      imageUrl: 'assets/smartwatchesnoise/noisewatch24.jpeg',
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

  // ....add to cart......
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
