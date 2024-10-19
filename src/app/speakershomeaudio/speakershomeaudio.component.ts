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
  powerOutput: { label: string, description: string, price: string }[];
}
@Component({
  selector: 'app-speakershomeaudio',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './speakershomeaudio.component.html',
  styleUrl: './speakershomeaudio.component.css'
})
export class SpeakershomeaudioComponent {
  cartItemCount: number=0;
  products: Product[] = [
    //card1...
    {
      id: 1,
      title: 'Speaker1',
      price: '₹xxxx',
      //card img url
      imageUrl: '../../assets/home audio speakers images/speaker1.jpg',
      description: 'boAt Aavante Bar 590 with 25W RMS, Dual Passive Radiatior & 7 Hours Playback 25 W Bluetooth Soundbar  (Pebble Black, 2.0 Channel)',
      //square option images
      options: [
        { imageUrl: '../../assets/home audio speakers images/speaker 1.1.jpg' },
        { imageUrl: '../../assets/home audio speakers images/speaker1.2.jpg' },
        { imageUrl: 'assets/home audio speakers images/speaker1.4.jpg' },
        { imageUrl: '../../assets/home audio speakers images/speaker 1.3.jpg' },
        { imageUrl: 'assets/home audio speakers images/speaker1.5.jpg' }
      ],
      //color changes images
      colors: [
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/home audio speakers images/gray speaker1.jpg',
          active: true,
          optionImages: [
           
            { imageUrl: 'assets/home audio speakers images/gray speaker1.1.jpg' },
            { imageUrl: 'assets/home audio speakers images/grayspeaker 1.2.jpg' },
            { imageUrl: 'assets/home audio speakers images/gray speaker1.3.jpg' },
            { imageUrl: 'assets/home audio speakers images/gray speaker 1.4.jpg' },
            { imageUrl: 'assets/home audio speakers images/gray speaker1.5.jpg' }
          ]
        },
        {
          backgroundColor: '#000',
          imageUrl: 'assets/home audio speakers images/black speakere1.jpg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/home audio speakers images/black speaker1.1.jpg' },
            { imageUrl: 'assets/home audio speakers images/black speaker1.2.jpg' },
            { imageUrl: 'assets/home audio speakers images/black speaker1.3.jpg' },
            { imageUrl: 'assets/home audio speakers images/blackspeaker 1.4.jpg' },
            { imageUrl: 'assets/home audio speakers images/black speaker 1.5.jpg' }
          ]
        }
      ],
      //sizes in power output labels
      sizes: [{ label: '' }, { label: '' }],
      //modal content show and  hidden
      showAdditionalContent: false,
      
      mainImageSrc: '../../assets/home audio speakers images/speaker1.jpg',
      selectedSize: '',
      //power walts 25,40,550
      powerOutput: [
        { label: '25w', description: 'boAt Aavante Bar 590 with 25W RMS, Dual Passive Radiatior & 7 Hours Playback 25 W Bluetooth Soundbar  (Pebble Black, 2.0 Channel) 25w ', price: '₹1,999' },
        { label: '40w', description: 'boAt Aavante Bar 590 with 25W RMS, Dual Passive Radiatior & 7 Hours Playback 25 W Bluetooth Soundbar  (Pebble Black, 2.0 Channel) 40w ', price: '₹2,499' },
        { label: '550w', description: 'boAt Aavante Bar 590 with 25W RMS, Dual Passive Radiatior & 7 Hours Playback 25 W Bluetooth Soundbar  (Pebble Black, 2.0 Channel)55w ', price: '₹3,000' }
      ]
    } ,
    //card2...
    {
      id: 2,
      title: ' speaker',
      price: '₹xxxx',
      imageUrl: 'assets/home audio speakers images/speakers2.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,
     
      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card3
    {
      id: 3,
      title: ' speaker',
      price: '₹xxxx',
      imageUrl: 'assets/home audio speakers images/speakers3.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card4
    {
      id: 4,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speakers4.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card5
    {
      id: 5,
      title: ' speaker',
      price: '₹xxxx',
      imageUrl: 'assets/home audio speakers images/speakers5.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card6
    {
      id: 6,
      title: ' speaker',
      price: '₹xxxx',
      imageUrl: 'assets/home audio speakers images/speakers6.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card7
    {
      id: 7,
      title: ' speaker',
      price: '₹xxxx',
      imageUrl: 'assets/home audio speakers images/speakers7.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card8
    {
      id: 8,
      title: ' speaker',
      price: 'xxxx',
      imageUrl: 'assets/home audio speakers images/speakers8.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card9
    {
      id: 9,
      title: ' speaker',
      price: '₹xxxx',
      imageUrl: 'assets/home audio speakers images/speaker19.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card10
    {
      id: 10,
      title: ' speaker',
      price: '₹xxxx',
      imageUrl: 'assets/home audio speakers images/speaker10.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card11
    {
      id: 11,
      title: 'speaker',
      price: '₹xxxx',
      imageUrl: 'assets/home audio speakers images/speaker11.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: 'assets/images/speaker1.jpeg' },
        { imageUrl: 'assets/images/speaker5.jpeg' },
        { imageUrl: 'assets/images/speaker4.jpeg' },
        { imageUrl: 'assets/images/speaker2.jpeg' },
        { imageUrl: 'assets/images/speaker3.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: 'assets/images/speaker2.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/images/speaker3.jpeg' },
            { imageUrl: 'assets/images/speaker1.jpeg' },
            { imageUrl: 'assets/images/speaker5.jpeg' },
            { imageUrl: 'assets/images/speaker2.jpeg' },
            { imageUrl: 'assets/images/speaker1.jpeg' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: 'assets/images/speaker3.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/images/speaker1.jpeg' },
            { imageUrl: 'assets/images/speaker2.jpeg' },
            { imageUrl: 'assets/images/speaker3.jpeg' },
            { imageUrl: 'assets/images/speaker4.jpeg' },
            { imageUrl: 'assets/images/speaker5.jpeg' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    } ,
    //card12
    {
      id: 12,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speaker12.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card13
    {
      id: 13,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/spaker13.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card14
    {
      id: 14,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/spaker14.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card15
    {
      id: 15,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speaker15.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,
  
      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card
    {
      id: 16,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speakers16.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card17
    {
      id: 17,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speaker17.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card18
    {
      id: 18,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speaker18.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card19
    {
      id: 19,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speaker19.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,
  
      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card20
    {
      id: 20,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speakers20.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card21
    {
      id: 21,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speakers21.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card22
    {
      id: 22,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speaker21.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card23
    {
      id: 23,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speakers23.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,
 
      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    //card24
    {
      id: 24,
      title: ' speaker',
      price: '₹xxx',
      imageUrl: 'assets/home audio speakers images/speakers24.jpg',
      description: 'Noise Icon 2 1.8 Display with Bluetooth Calling ,Womens Edition,  AI Voice Assistant Smartwatch  (green Strap, Regular)',
      options: [
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' },
        { imageUrl: '' }
      ],
      colors: [
        {
          backgroundColor: '#6E566F',
          imageUrl: '',
          active: true,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        },
        {
          backgroundColor: 'pink',
          imageUrl: '',
          active: false,
          optionImages: [
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' },
            { imageUrl: '' }
          ]
        }
      ],
      sizes: [{ label: '' }, { label: '' }],
      showAdditionalContent: false,

      mainImageSrc: '',
      selectedSize: '',
      powerOutput: [
        { label: '200w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (pink Strap, Regular) 200w ', price: '₹3,999' },
        { label: '400w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 00w ', price: '₹3,499' },
        { label: '520w', description: 'Noise Icon 2 1.8 Display with Bluetooth Calling Womens Edition  AI Voice Assistant Smartwatch  (black Strap, Regular) 400w ', price: '₹3,499' }
      ]
    },
    // Add more products as needed
  ];

    
    //  Modal for additional content  in show and close it will perform  X-ICON
 showAdditionalContent(product: Product) {
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
    product.options = color.optionImages;
    product.mainImageSrc = color.imageUrl;
  }
  
  //size changes and update walts
  selectSize(product: Product, size: string) {
    product.selectedSize = size;
    this. updateProductDetailsByPowerOutput(product, size);
  }
  
  updateProductDetailsByPowerOutput(product: Product, powerOutputLabel: string) {
    const selectedOption = product.powerOutput.find(option => option.label === powerOutputLabel);
    if (selectedOption) {
      product.description = selectedOption.description;
      product.price = selectedOption.price;
    } else {
      console.error(`No details found for power output: ${powerOutputLabel}`);
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

