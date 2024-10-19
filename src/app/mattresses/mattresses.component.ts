import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
interface sizeOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface ThicknessOption {
  label: string;
  active: boolean;
  price: string;
  description: string;
}

interface DimensionOption {
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

  Dimension: DimensionOption[];
  showAdditionalContent: boolean;
  quantity: number;
  screenSize: string;
  selectedDimension?: string;
  size: sizeOption[];
  selectedsize?: string;
  Thickness: ThicknessOption[];
  selectedThickness?: string;
}
@Component({
  selector: 'app-mattresses',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './mattresses.component.html',
  styleUrl: './mattresses.component.css'
})
export class MattressesComponent {
  cartItemCount: number = 0;
  products: Product[] = [
  
    {
      id: 1,
      title: 'Mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/beds/mat1.jpeg',
      description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
      options: [
        { imageUrl: 'assets/beds/mat2.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat4.jpeg' },
        { imageUrl: 'assets/beds/mat5.jpeg' },
        { imageUrl: 'assets/beds/mat4.jpeg' }
      ],
      colors: [
        {
          backgroundColor: '#000',
          imageUrl: 'assets/beds/mat3.jpeg',
          active: true,
          optionImages: [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ]
        },
        {
          backgroundColor: '#eee',
          imageUrl: 'assets/beds/mat2.jpeg',
          active: false,
          optionImages: [
            { imageUrl: 'assets/beds/mat5.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
          ]
        }
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
        
      ],
      Thickness: [
        { label: '4 inchs', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inchs', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 2,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses1.jpeg',
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
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },{
      id: 3,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses2.jpeg',
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
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 4,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses3.jpeg',
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
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 5,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses4.jpeg',
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
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 6,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses5.jpeg',
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
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 7,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses7.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 8,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses6.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 9,
      title: 'mattresses1',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses8.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 10,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses9.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 11,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses11.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 12,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses12.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 13,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses13.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 14,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses14.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 15,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses15.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 16,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses16.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 17,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses17.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 18,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses18.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 19,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: 'assets/mattresses/mattresses19.jpeg',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 20,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: '',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 21,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: '',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 22,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: '',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 23,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: '',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '6 inch', active: false, price: '₹22,599', description: '16GB RAM description' },
        
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    },
    {
      id: 24,
      title: 'mattresses',
      price: '₹XXXX',
      imageUrl: '',
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
        },
      ],
      size: [
        { label: 'king', active: false, price: '₹18,999', description: 'lorem1' },
        { label: 'Queen', active: true, price: '₹22,599', description: 'lorem2' },
      ],
      Thickness: [
        { label: '4 inch', active: true, price: '₹18,999', description: '8GB RAM description' },
        { label: '8 inchs', active: false, price: '₹22,599', description: '16GB RAM description' },
        { label: '12 inchs', active: false, price: '₹22,599', description: '16GB RAM description' }
      ],
      Dimension: [
        { label: '36 inch x 72 inch', active: true, price: '₹18,999', description: 'Wi-Fi connectivity description' },
        { label: '72 inch x 35 inch', active: false, price: '₹22,599', description: 'Bluetooth connectivity description' }
      ],
      showAdditionalContent: false,
      quantity: 1,
      screenSize: '15.6 inch',
    
    }
    
  ];

  selectThickness(product: Product, label: string) {
    // Reset product's price and description
    product.price = '';
    product.description = '';
    
    // Find the selected thickness option
    const selectedThicknessOption = product.Thickness.find(thicknessOption => thicknessOption.label === label);
    
    if (selectedThicknessOption) {
        // Update product's selected thickness
        product.selectedThickness = label;
        
        // Update product's main image and options based on product id
        if (product.id === 1) {
            if (label === '6 inchs') {
                product.mainImageSrc = 'assets/beds/mat3.jpeg';
                product.options = [
                    { imageUrl: 'assets/beds/mat1.jpeg' },
                    { imageUrl: 'assets/beds/mat3.jpeg' },
                    { imageUrl: 'assets/beds/mat2.jpeg' }
                ];
                product.colors = [
                    {
                        backgroundColor: '#000',
                        imageUrl: 'assets/beds/mat3.jpeg',
                        active: true,
                        optionImages: [
                            { imageUrl: 'assets/beds/mat2.jpeg' },
                            { imageUrl: 'assets/beds/mat4.jpeg' },
                            { imageUrl: 'assets/beds/mat5.jpeg' }
                        ]
                    },
                    {
                        backgroundColor: 'red',
                        imageUrl: 'assets/beds/mat2.jpeg',
                        active: false,
                        optionImages: [
                            { imageUrl: 'assets/beds/mat1.jpeg' },
                            { imageUrl: 'assets/beds/mat2.jpeg' },
                            { imageUrl: 'assets/beds/mat3.jpeg' }
                        ]
                    }
                ];
            }
            if (label === '4 inchs') {
              product.mainImageSrc = 'assets/beds/mat5.jpeg';
              product.options = [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#000',
                      imageUrl: 'assets/beds/mat3.jpeg',
                      active: true,
                      optionImages: [
                          { imageUrl: 'assets/beds/mat2.jpeg' },
                          { imageUrl: 'assets/beds/mat4.jpeg' },
                          { imageUrl: 'assets/beds/mat5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: 'red',
                      imageUrl: 'assets/beds/mat2.jpeg',
                      active: false,
                      optionImages: [
                          { imageUrl: 'assets/beds/mat1.jpeg' },
                          { imageUrl: 'assets/beds/mat2.jpeg' },
                          { imageUrl: 'assets/beds/mat3.jpeg' }
                      ]
                  }
              ];
          }
        
        } 
        if (product.id === 2) {
          if (label === '6 inchs') {
              product.mainImageSrc = 'assets/beds/mat3.jpeg';
              product.options = [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' }
              ];
              product.colors = [
                  {
                      backgroundColor: '#000',
                      imageUrl: 'assets/beds/mat3.jpeg',
                      active: true,
                      optionImages: [
                          { imageUrl: 'assets/beds/mat2.jpeg' },
                          { imageUrl: 'assets/beds/mat4.jpeg' },
                          { imageUrl: 'assets/beds/mat5.jpeg' }
                      ]
                  },
                  {
                      backgroundColor: 'red',
                      imageUrl: 'assets/beds/mat2.jpeg',
                      active: false,
                      optionImages: [
                          { imageUrl: 'assets/beds/mat1.jpeg' },
                          { imageUrl: 'assets/beds/mat2.jpeg' },
                          { imageUrl: 'assets/beds/mat3.jpeg' }
                      ]
                  }
              ];
          }
          if (label === '4 inchs') {
            product.mainImageSrc = 'assets/beds/mat5.jpeg';
            product.options = [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' }
            ];
            product.colors = [
                {
                    backgroundColor: '#000',
                    imageUrl: 'assets/beds/mat3.jpeg',
                    active: true,
                    optionImages: [
                        { imageUrl: 'assets/beds/mat2.jpeg' },
                        { imageUrl: 'assets/beds/mat4.jpeg' },
                        { imageUrl: 'assets/beds/mat5.jpeg' }
                    ]
                },
                {
                    backgroundColor: 'red',
                    imageUrl: 'assets/beds/mat2.jpeg',
                    active: false,
                    optionImages: [
                        { imageUrl: 'assets/beds/mat1.jpeg' },
                        { imageUrl: 'assets/beds/mat2.jpeg' },
                        { imageUrl: 'assets/beds/mat3.jpeg' }
                    ]
                }
            ];
        }
      
      } 
      if (product.id === 3) {
        if (label === '6 inchs') {
            product.mainImageSrc = 'assets/beds/mat3.jpeg';
            product.options = [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' }
            ];
            product.colors = [
                {
                    backgroundColor: '#000',
                    imageUrl: 'assets/beds/mat3.jpeg',
                    active: true,
                    optionImages: [
                        { imageUrl: 'assets/beds/mat2.jpeg' },
                        { imageUrl: 'assets/beds/mat4.jpeg' },
                        { imageUrl: 'assets/beds/mat5.jpeg' }
                    ]
                },
                {
                    backgroundColor: 'red',
                    imageUrl: 'assets/beds/mat2.jpeg',
                    active: false,
                    optionImages: [
                        { imageUrl: 'assets/beds/mat1.jpeg' },
                        { imageUrl: 'assets/beds/mat2.jpeg' },
                        { imageUrl: 'assets/beds/mat3.jpeg' }
                    ]
                }
            ];
        }
        if (label === '4 inchs') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg';
          product.options = [
              { imageUrl: 'assets/beds/mat1.jpeg' },
              { imageUrl: 'assets/beds/mat3.jpeg' },
              { imageUrl: 'assets/beds/mat2.jpeg' }
          ];
          product.colors = [
              {
                  backgroundColor: '#000',
                  imageUrl: 'assets/beds/mat3.jpeg',
                  active: true,
                  optionImages: [
                      { imageUrl: 'assets/beds/mat2.jpeg' },
                      { imageUrl: 'assets/beds/mat4.jpeg' },
                      { imageUrl: 'assets/beds/mat5.jpeg' }
                  ]
              },
              {
                  backgroundColor: 'red',
                  imageUrl: 'assets/beds/mat2.jpeg',
                  active: false,
                  optionImages: [
                      { imageUrl: 'assets/beds/mat1.jpeg' },
                      { imageUrl: 'assets/beds/mat2.jpeg' },
                      { imageUrl: 'assets/beds/mat3.jpeg' }
                  ]
              }
          ];
      }
    
    } 
    if (product.id === 4) {
      if (label === '6 inchs') {
          product.mainImageSrc = 'assets/beds/mat3.jpeg';
          product.options = [
              { imageUrl: 'assets/beds/mat1.jpeg' },
              { imageUrl: 'assets/beds/mat3.jpeg' },
              { imageUrl: 'assets/beds/mat2.jpeg' }
          ];
          product.colors = [
              {
                  backgroundColor: '#000',
                  imageUrl: 'assets/beds/mat3.jpeg',
                  active: true,
                  optionImages: [
                      { imageUrl: 'assets/beds/mat2.jpeg' },
                      { imageUrl: 'assets/beds/mat4.jpeg' },
                      { imageUrl: 'assets/beds/mat5.jpeg' }
                  ]
              },
              {
                  backgroundColor: 'red',
                  imageUrl: 'assets/beds/mat2.jpeg',
                  active: false,
                  optionImages: [
                      { imageUrl: 'assets/beds/mat1.jpeg' },
                      { imageUrl: 'assets/beds/mat2.jpeg' },
                      { imageUrl: 'assets/beds/mat3.jpeg' }
                  ]
              }
          ];
      }
      if (label === '4 inchs') {
        product.mainImageSrc = 'assets/beds/mat5.jpeg';
        product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' }
        ];
        product.colors = [
            {
                backgroundColor: '#000',
                imageUrl: 'assets/beds/mat3.jpeg',
                active: true,
                optionImages: [
                    { imageUrl: 'assets/beds/mat2.jpeg' },
                    { imageUrl: 'assets/beds/mat4.jpeg' },
                    { imageUrl: 'assets/beds/mat5.jpeg' }
                ]
            },
            {
                backgroundColor: 'red',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                    { imageUrl: 'assets/beds/mat1.jpeg' },
                    { imageUrl: 'assets/beds/mat2.jpeg' },
                    { imageUrl: 'assets/beds/mat3.jpeg' }
                ]
            }
        ];
    }
  
  } 
  if (product.id === 5) {
    if (label === '6 inchs') {
        product.mainImageSrc = 'assets/beds/mat3.jpeg';
        product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' }
        ];
        product.colors = [
            {
                backgroundColor: '#000',
                imageUrl: 'assets/beds/mat3.jpeg',
                active: true,
                optionImages: [
                    { imageUrl: 'assets/beds/mat2.jpeg' },
                    { imageUrl: 'assets/beds/mat4.jpeg' },
                    { imageUrl: 'assets/beds/mat5.jpeg' }
                ]
            },
            {
                backgroundColor: 'red',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                    { imageUrl: 'assets/beds/mat1.jpeg' },
                    { imageUrl: 'assets/beds/mat2.jpeg' },
                    { imageUrl: 'assets/beds/mat3.jpeg' }
                ]
            }
        ];
    }
    if (label === '4 inchs') {
      product.mainImageSrc = 'assets/beds/mat5.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }

} 
if (product.id === 6) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 7) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 8) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 9) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 10) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 11) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 12) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 13) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 14) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 15) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 16) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 17) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 18) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 19) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 20) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 21) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 22) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 
if (product.id === 23) {
  if (label === '6 inchs') {
      product.mainImageSrc = 'assets/beds/mat3.jpeg';
      product.options = [
          { imageUrl: 'assets/beds/mat1.jpeg' },
          { imageUrl: 'assets/beds/mat3.jpeg' },
          { imageUrl: 'assets/beds/mat2.jpeg' }
      ];
      product.colors = [
          {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' }
              ]
          },
          {
              backgroundColor: 'red',
              imageUrl: 'assets/beds/mat2.jpeg',
              active: false,
              optionImages: [
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' }
              ]
          }
      ];
  }
  if (label === '4 inchs') {
    product.mainImageSrc = 'assets/beds/mat5.jpeg';
    product.options = [
        { imageUrl: 'assets/beds/mat1.jpeg' },
        { imageUrl: 'assets/beds/mat3.jpeg' },
        { imageUrl: 'assets/beds/mat2.jpeg' }
    ];
    product.colors = [
        {
            backgroundColor: '#000',
            imageUrl: 'assets/beds/mat3.jpeg',
            active: true,
            optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' }
            ]
        },
        {
            backgroundColor: 'red',
            imageUrl: 'assets/beds/mat2.jpeg',
            active: false,
            optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' }
            ]
        }
    ];
}

} 

        else if (product.id === 24) {
            if (label === 'Thin') {
                product.mainImageSrc = 'https://example.com/thin2.jpg';
                product.options = [
                    { imageUrl: 'https://example.com/thin3.jpg' },
                    { imageUrl: 'https://example.com/thin4.jpg' },
                    { imageUrl: 'https://example.com/thin5.jpg' }
                ];
                product.colors = [
                    {
                        backgroundColor: 'green',
                        imageUrl: 'https://example.com/thin3.jpg',
                        active: true,
                        optionImages: [
                            { imageUrl: 'https://example.com/thin4.jpg' },
                            { imageUrl: 'https://example.com/thin5.jpg' },
                            { imageUrl: 'https://example.com/thin6.jpg' }
                        ]
                    },
                    {
                        backgroundColor: 'blue',
                        imageUrl: 'https://example.com/thin4.jpg',
                        active: false,
                        optionImages: [
                            { imageUrl: 'https://example.com/thin5.jpg' },
                            { imageUrl: 'https://example.com/thin6.jpg' },
                            { imageUrl: 'https://example.com/thin1.jpg' }
                        ]
                    }
                ];
            } else if (label === 'Thick') {
                product.mainImageSrc = 'https://example.com/thick2.jpg';
                product.options = [
                    { imageUrl: 'https://example.com/thick3.jpg' },
                    { imageUrl: 'https://example.com/thick4.jpg' },
                    { imageUrl: 'https://example.com/thick5.jpg' }
                ];
                product.colors = [
                    {
                        backgroundColor: 'green',
                        imageUrl: 'https://example.com/thick3.jpg',
                        active: true,
                        optionImages: [
                            { imageUrl: 'https://example.com/thick4.jpg' },
                            { imageUrl: 'https://example.com/thick5.jpg' },
                            { imageUrl: 'https://example.com/thick6.jpg' }
                        ]
                    },
                    {
                        backgroundColor: 'yellow',
                        imageUrl: 'https://example.com/thick4.jpg',
                        active: false,
                        optionImages: [
                            { imageUrl: 'https://example.com/thick5.jpg' },
                            { imageUrl: 'https://example.com/thick6.jpg' },
                            { imageUrl: 'https://example.com/thick1.jpg' }
                        ]
                    }
                ];
            }
        }
    }
}


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
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 2) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 3) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 4) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 5) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 6) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 7) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 8) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 9) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 10) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 11) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 12) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 13) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 14) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 15) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 16) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 17) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 18) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 19) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 20) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 21) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 22) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }
      if (product.id === 23) {
        if (label === 'king') {
          product.mainImageSrc = 'assets/beds/mat1.jpeg';
          product.options = [
            { imageUrl: 'assets/beds/mat1.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat5.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: '#000',
              imageUrl: 'assets/beds/mat5.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'brown',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                ]
              }
            ]
        } else if (label === 'Queen') {
          product.mainImageSrc = 'assets/beds/mat5.jpeg'; 
          product.options = [
            { imageUrl: 'assets/beds/mat3.jpeg' },
            { imageUrl: 'assets/beds/mat4.jpeg' },
            { imageUrl: 'assets/beds/mat2.jpeg' },
            { imageUrl: 'assets/beds/mat1.jpeg' },
          ];
          product. colors=[
            {
              backgroundColor: 'cream',
              imageUrl: 'assets/beds/mat3.jpeg',
              active: true,
              optionImages: [
                { imageUrl: 'assets/beds/mat1.jpeg' },
                { imageUrl: 'assets/beds/mat2.jpeg' },
                { imageUrl: 'assets/beds/mat4.jpeg' },
                { imageUrl: 'assets/beds/mat5.jpeg' },
                { imageUrl: 'assets/beds/mat3.jpeg' },
              ]
              },
              {
                backgroundColor: 'yellow',
                imageUrl: 'assets/beds/mat2.jpeg',
                active: false,
                optionImages: [
                  { imageUrl: 'assets/beds/mat2.jpeg' },
                  { imageUrl: 'assets/beds/mat1.jpeg' },
                  { imageUrl: 'assets/beds/mat5.jpeg' },
                  { imageUrl: 'assets/beds/mat4.jpeg' },
                  { imageUrl: 'assets/beds/mat3.jpeg' },
                ]
              }
            ]
        }

      }

       else if (product.id === 24) {
        if (label === 'seater1') {
          product.mainImageSrc = 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/s/t/b/right-facing-76-orange-183-chenille-50-no-tq8-brownie-73-orange-original-imagz646z9effmkg.jpeg?q=70';
          product.options = [
            { imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/5/c/n/76-2-0-black-imitation-leather-3-1-1-184-15-0-87-63-36-22-0-abot-original-imagx8ju24nys54v.jpeg?q=70' },
            { imageUrl: '../../assets/Dell Laptops Images/gray delllaptop1.2.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.3.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.4.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop1.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: 'gray',
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
                backgroundColor: 'brown',
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
            ]
        } 
        else if (label === 'seater2') {
          product.mainImageSrc = 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-sectional/n/9/k/-original-imagqz22h8qqmwfy.jpeg?q=70'; 
          product.options = [
            { imageUrl: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sofa-set/5/c/n/76-2-0-black-imitation-leather-3-1-1-184-15-0-87-63-36-22-0-abot-original-imagx8ju24nys54v.jpeg?q=70' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.3.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop 1.4.jpg' },
            { imageUrl: '../../assets/Dell Laptops Images/gray dell laptop1.5.jpg' },
          ];
          product. colors=[
            {
              backgroundColor: 'green',
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
                backgroundColor: 'yellow',
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
            ]
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



  selectConnectivity(product: Product, label: string) {
    product.Dimension.forEach(option => {
      option.active = (option.label === label);
      if (option.active) {
        product.price = option.price;
        product.description = option.description;
        product.selectedDimension = label;
      }
    });
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
