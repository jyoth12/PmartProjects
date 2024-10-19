import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
interface weightOption {
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
  mainImageSrc?: string;
  showAdditionalContent: boolean;
  quantity: number; 
  weight: weightOption[];
  selectedweight?: string;
 
}
@Component({
  selector: 'app-amaroninverters',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './amaroninverters.component.html',
  styleUrl: './amaroninverters.component.css'
})
export class AmaroninvertersComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'TV',
      price: '₹32,999',
      imageUrl: 'assets/inverters/inverter1.jpeg',
      description: 'SONY Bravia 2 163.9 cm (32 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition  (K-65S25B)',
      options: [
        { imageUrl: 'assets/inverters/inverter1.jpeg' },
        { imageUrl: 'assets/inverters/inverter2.jpeg' },
        { imageUrl: 'assets/inverters/inverter3.jpeg' },
        { imageUrl: 'assets/inverters/inverter4.jpeg' },
        { imageUrl: 'assets/inverters/inverter5.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹32,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹39,999', description: 'lorem2' }
        
        
      ],
      
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 2,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter2.jpeg',
      description: '',
      options: [
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 3,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter3.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 4,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter4.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 5,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter5.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 6,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter6.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],

      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 7,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter7.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 8,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter8.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],

      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 9,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter9.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 10,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter10.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 11,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter11.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv6.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
        
      ],
      
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 12,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter12.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 13,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter13.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 14,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter14.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 15,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter15.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 16,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter16.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],

      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 17,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter17.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 18,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter6.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],

      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 19,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter1.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
      
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 20,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter3.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 21,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter8.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 22,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter4.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 23,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter14.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      weight: [
        { label:'7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 24,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/inverters/inverter11.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      weight: [
        { label: '7.4 kgs', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '9.5 kgs', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    
  ];


  selectweight(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected capacity option
    const selectedweightOption = product.weight.find(weightoption => weightoption.label === label);
    
    if (selectedweightOption) {
      // Update product's selected capacity
      product.selectedweight = label;
      
      // Update product's main image and options based on product id
      if (product.id === 1) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      } 
      if (product.id === 2) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }                             
      if (product.id === 3) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 4) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 5) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 6) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 7) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 8) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 9) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 10) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 11) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 12) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 13) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 14) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 15) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 16) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 17) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 18) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 19) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 20) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      if (product.id === 21) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }   
      if (product.id === 22) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }   
      if (product.id === 23) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }                                       
      if (product.id === 24) {
        if (label === '7.4 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter10.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
            { imageUrl: 'assets/inverters/inverter12.jpeg' },
            { imageUrl: 'assets/inverters/inverter11.jpeg' },
            { imageUrl: 'assets/inverters/inverter16.jpeg' },
            { imageUrl: 'assets/inverters/inverter14.jpeg' },
          ];
         
        } 
        if (label === '9.5 kgs') {
          product.mainImageSrc = 'assets/inverters/inverter12.jpeg';
          product.options = [
            { imageUrl: 'assets/inverters/inverter9.jpeg' },
            { imageUrl: 'assets/inverters/inverter4.jpeg' },
            { imageUrl: 'assets/inverters/inverter3.jpeg' },
            { imageUrl: 'assets/inverters/inverter5.jpeg' },
            { imageUrl: 'assets/inverters/inverter7.jpeg' },
          ];
          
        } 
        
      }               
      product.price = selectedweightOption.price;
      product.description = selectedweightOption.description;
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
