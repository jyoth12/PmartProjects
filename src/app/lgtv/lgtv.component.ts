import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { RouterLink } from '@angular/router';
interface sizeOption {
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
  size: sizeOption[];
  selectedsize?: string;
 
}
@Component({
  selector: 'app-lgtv',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './lgtv.component.html',
  styleUrl: './lgtv.component.css'
})
export class LgtvComponent {
  cartItemCount: number = 0;
  products: Product[] = [
    {
      id: 1,
      title: 'TV',
      price: '₹32,999',
      imageUrl: 'assets/tv/tv2.jpeg',
      description: 'SONY Bravia 2 163.9 cm (32 inch) Ultra HD (4K) LED Smart Google TV 2024 Edition  (K-65S25B)',
      options: [
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv6.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' }
      ],
     
      size: [
        { label: '32 inches', active: false, price: '₹32,999', description: 'lorem1' },
        { label: '42 inches', active: true, price: '₹39,999', description: 'lorem2' },
        { label: '49 inches', active: true, price: '₹45,999', description: 'lorem2' },
        { label: '50 inches', active: true, price: '₹50,999', description: 'lorem2' },
        
      ],
      
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 2,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv3.jpeg',
      description: '',
      options: [
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 3,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv5.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 4,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv 4.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 5,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv6.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 6,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv7.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],

      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 7,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv8.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 8,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv9.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],

      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 9,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv10.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 10,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv11.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 11,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv2.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv6.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' }
      ],
     
      size: [
        { label: '32 inches', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '42 inches', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '49 inches', active: true, price: '₹22,599', description: 'lorem2' },
        { label: '50 inches', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 12,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv3.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' },
        { imageUrl: 'assets/tv/tv3.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 13,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv5.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' },
        { imageUrl: 'assets/tv/tv5.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 14,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv 4.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 15,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv6.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
    
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 16,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv17.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' },
        { imageUrl: 'assets/tv/tv7.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],

      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 17,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv8.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' },
        { imageUrl: 'assets/tv/tv8.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 18,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv18.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' },
        { imageUrl: 'assets/tv/tv9.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],

      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 19,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv19.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
      
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 20,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv20.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 21,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv21.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 22,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv22.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 23,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv23.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      size: [
        { label: '32 inches', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '42 inches', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    {
      id: 24,
      title: 'TV',
      price: '₹XXXX',
      imageUrl: 'assets/tv/tv24.jpeg',
      description: 'Longway Super Dlx 750 W Juicer Mixer Grinder (4 Jars, White & Blue)',
      options: [
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' },
        { imageUrl: 'assets/tv/tv10.jpeg' }
      ],
     
      size: [
        { label: '3', active: false, price: '₹18,999', description: 'lorem1' },
        { label: '4', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      showAdditionalContent: false,
      quantity: 1,
    
    
    },
    
  ];

  
  selectsize(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected capacity option
    const selectedsizeOption = product.size.find(sizeoption => sizeoption.label === label);
    
    if (selectedsizeOption) {
      // Update product's selected capacity
      product.selectedsize = label;
      
      // Update product's main image and options based on product id
      if (product.id === 1) {
        if (label === '32 inches') {
          product.mainImageSrc = 'assets/tv/tv7.jpeg';
          product.options = [
            { imageUrl: 'assets/tv/tv7.jpeg' },
            { imageUrl: 'assets/tv/tv7.jpeg' },
            { imageUrl: 'assets/tv/tv7.jpeg' },
            { imageUrl: 'assets/tv/tv7.jpeg' },
            { imageUrl: 'assets/tv/tv7.jpeg' },
          ];
         
        } 
        if (label === '42 inches') {
          product.mainImageSrc = 'assets/tv/tv9.jpeg';
          product.options = [
            { imageUrl: 'assets/tv/tv9.jpeg' },
            { imageUrl: 'assets/tv/tv9.jpeg' },
            { imageUrl: 'assets/tv/tv9.jpeg' },
            { imageUrl: 'assets/tv/tv9.jpeg' },
            { imageUrl: 'assets/tv/tv9.jpeg' },
          ];
          
        } 
        if (label === '49 inches') {
          product.mainImageSrc = 'assets/tv/tv15.jpeg';
          product.options = [
            { imageUrl: 'assets/tv/tv15.jpeg' },
            { imageUrl: 'assets/tv/tv15.jpeg' },
            { imageUrl: 'assets/tv/tv15.jpeg' },
            { imageUrl: 'assets/tv/tv15.jpeg' },
            { imageUrl: 'assets/tv/tv15.jpeg' },
          ];
          
        } 
        if (label === '50 inches') {
          product.mainImageSrc = 'assets/tv/tv18.jpeg';
          product.options = [
            { imageUrl: 'assets/tv/tv15.jpeg' },
            { imageUrl: 'assets/tv/tv15.jpeg' },
            { imageUrl: 'assets/tv/tv15.jpeg' },
            { imageUrl: 'assets/tv/tv15.jpeg' },
            { imageUrl: 'assets/tv/tv15.jpeg' },
          ];
          
        } 
      }               
      product.price = selectedsizeOption.price;
      product.description = selectedsizeOption.description;
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
