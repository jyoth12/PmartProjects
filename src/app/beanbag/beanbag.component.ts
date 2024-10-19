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
  // square images
  options: { imageUrl: string }[];
  // circle images
  colors: { 
    backgroundColor: string; 
    imageUrl: string; 
    active?: boolean; 
    optionImages: { imageUrl: string }[];
  }[];
  //sizes
  sizes: { label: string; active?: boolean }[];
  showAdditionalContent: boolean;
  quantity: number;
  mainImageSrc?: string;
  selectedSize?: string;
}

@Component({
  selector: 'app-beanbag',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './beanbag.component.html',
  styleUrl: './beanbag.component.css'
})
export class BeanbagComponent {
  cartItemCount:number=0;
      products: Product[] = [
        //card1..
        {
          id: 1,
          title: 'Bean Bag',
          price: '₹699',
          //card image
          imageUrl: '/assets/beanbags/bean1',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore non, animi commodi deserunt tempore sed cum sit, alias atque consequuntur, temporibus minima nemo officiis! Quas nihil magni consectetur repellat? Amet fuga, maiores, ut enim eaque, laudantium doloribus dolore molestias nam assumenda dicta debitis? Voluptatum pariatur, in amet voluptate explicabo porro.',
          //square image
          options: [{ imageUrl: '/assets/beanbags/bean1.1' }, 
                    { imageUrl: '/assets/beanbags/bean1.2' },
                    { imageUrl: '/assets/beanbags/bean1.3' },
                    { imageUrl: '/assets/beanbags/bean1.4' },
                    { imageUrl: '/assets/beanbags/bean1.5' }],
          //color circle images  red,green,pink,yellow,blue       
          colors: [
            { 
              backgroundColor: '#000', 
              imageUrl: '/assets/beanbags/bean1black', 
              active: true,
              optionImages: [
                { imageUrl: '/assets/beanbags/bean1.1black' }, 
                    { imageUrl: '/assets/beanbags/bean1.2black' },
                    { imageUrl: '/assets/beanbags/bean1.3black' },
                    { imageUrl: '/assets/beanbags/bean1.4black' },
                    { imageUrl: '/assets/beanbags/bean1.5black' }
    
                
              ]
            },
            { 
              backgroundColor: '#fccfcf', 
              imageUrl: '/assets/beanbags/bean1sliver', 
              active: false,
              optionImages: [
                { imageUrl: '/assets/beanbags/bean1.1sliver' }, 
                    { imageUrl: '/assets/beanbags/bean1.2sliver' },
                    { imageUrl: '/assets/beanbags/bean1.3sliver' },
                    { imageUrl: '/assets/beanbags/bean1.4sliver' },
                    { imageUrl: '/assets/beanbags/bean1.5sliver' }
              ]
            },
          ],
          //sizes
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card2..
        {
          id: 2,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress8.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card3..
        {
          id: 3,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card4..
        {
          id: 4,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card5..
        {
          id: 5,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress8.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card6..
        {
          id: 6,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress6.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card7..
        {
          id: 7,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card8..
        {
          id: 8,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress8.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card9..
        {
          id: 9,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card10..
        {
          id: 10,
          title: 'Bean Bag',
          price: '₹699',
          imageUrl: 'assets/images/dress8.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card11..
        {
          id: 11,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card12..
        {
          id: 12,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress8.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card13..
        {
          id: 13,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card14..
        {
          id: 14,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress8.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card15..
        {
          id: 15,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress6.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card16..
         {
          id: 16,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card17..
        {
          id: 17,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress8.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card18..
        {
          id: 18,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress8.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card19..
        {
          id: 19,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card20..
        {
          id: 20,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress6.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card21..
        {
          id: 21,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress6.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/dress7.avif', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card22..
        {
          id: 22,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card23..
        {
          id: 23,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        //card24..
        {
          id: 24,
          title: 'Bean Bag',
          price: '$100',
          imageUrl: 'assets/images/dress7.avif',
          description: 'Product 1 Description',
          options: [{ imageUrl: 'assets/option1.jpg' }, { imageUrl: 'assets/option2.jpg' }],
          colors: [
            { 
              backgroundColor: 'brown', 
              imageUrl: 'assets/images/sofa8.png', 
              active: true,
              optionImages: [
                { imageUrl: 'assets/images/fridge.jpeg' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/Laptop2.png' },
              ]
            },
            { 
              backgroundColor: '#00ff00', 
              imageUrl: 'assets/images/Laptop2.png', 
              active: false,
              optionImages: [
                { imageUrl: 'assets/images/Laptop2.png' },
                { imageUrl: 'assets/images/fridge.jpeg' },
              ]
            },
          ],
          sizes: [{ label: 'S' }, { label: 'M' }, { label: 'L' },{ label: 'XL' },{ label: 'XXL' }],
          showAdditionalContent: false,
          quantity: 1,
        },
        
        // Add more products as needed
      ];
  
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
        product.colors.forEach((c) => (c.active = false));
        color.active = true;
        product.mainImageSrc = color.imageUrl;
        // Update options images based on selected color
        product.options = color.optionImages;
      }
    //incre and decre quantity
      decreaseQuantity(product: Product) {
        if (product.quantity > 1) {
          product.quantity--;
        }
      }
    
      increaseQuantity(product: Product) {
        product.quantity++;
      }
    
      selectSize(product: Product, sizeLabel: string) {
        product.selectedSize = sizeLabel;
      }
    
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

