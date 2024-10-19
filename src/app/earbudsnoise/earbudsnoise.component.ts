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
  selector: 'app-earbudsnoise',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './earbudsnoise.component.html',
  styleUrl: './earbudsnoise.component.css'
})
export class EarbudsnoiseComponent {

  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: ' Noise Ear Buds',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds1.jpeg',
      description: 'Noise Buds VS102 with 50 Hrs Playtime, 11mm Driver, IPX5 and Unique Flybird Design Bluetooth Headset  (Midnight Blue, True Wireless)',
      options: [
        { imageUrl: 'assets/earbudsnoise/noisebuds1.1.jpeg' },
        { imageUrl: 'assets/earbudsnoise/noisebuds1.2.jpeg' },
        { imageUrl: 'assets/earbudsnoise/noisebuds1.3.jpeg' },
        { imageUrl: 'assets/earbudsnoise/noisebuds1.4.jpeg' },
        { imageUrl: 'assets/earbudsnoise/noisebuds1.5.jpeg' }
      ],
      colors: [
        {
          backgroundColor: 'Black',
          imageUrl: 'assets/earbudsnoise/blacknoisebuds1.jpeg',
          active: true,

          optionImages: [
            { imageUrl: 'assets/earbudsnoise/blacknoisebuds1.1.jpeg' },
            { imageUrl: 'assets/earbudsnoise/blacknoisebuds1.2.jpeg' },
            { imageUrl: 'assets/earbudsnoise/blacknoisebuds1.3.jpeg' },
            { imageUrl: 'assets/earbudsnoise/blacknoisebuds1.4.jpeg' },
            { imageUrl: 'assets/earbudsnoise/blacknoisebuds1.5.jpeg' }
          ]
        },
        {
          backgroundColor: 'white',
          imageUrl: 'assets/earbudsnoise/whitenoisebuds1.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/earbudsnoise/whitenoisebuds1.1.jpeg' },
            { imageUrl: 'assets/earbudsnoise/whitenoisebuds1.2.jpeg' },
            { imageUrl: 'assets/earbudsnoise/whitenoisebuds1.3.jpeg' },
            { imageUrl: 'assets/earbudsnoise/whitenoisebuds1.4.jpeg' },
            { imageUrl: 'assets/earbudsnoise/whitenoisebuds1.5.jpeg' }
          ]
        }
      ],
      sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      selectedSize: '',
      sizeOptions: [
        { label: '15.6 inch', description: 'Noise Buds VS102 with 50 Hrs Playtime, 11mm Driver, IPX5 and Unique Flybird Design Bluetooth Headset  (Midnight Blue, True Wireless)', price: '₹3,999' },
        { label: '15.6 inch', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 15.6 inch', price: '₹3,499' }
      ]
    },
    {
      id: 2,
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds2.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds3.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds4.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds5.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds6.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds7.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds8.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds9.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds10.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds11.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds12.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds13.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds14.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds15.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds16.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds17.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds18.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds19.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds20.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds21.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds22.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds23.jpeg',
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
      title: 'Noise Ear Buds ',
      price: '₹xxxx',
      imageUrl: 'assets/earbudsnoise/noisebuds24.jpeg',
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
