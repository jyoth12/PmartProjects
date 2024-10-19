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
  showAdditionalContent: boolean;
  quantity: number;
  mainImageSrc?: string;
  selectedSize?: string;
  ramOptions: { label: string, description: string, price: string }[];
  selectedRam?: string;
}
@Component({
  selector: 'app-mobilevivo',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './mobilevivo.component.html',
  styleUrl: './mobilevivo.component.css'
})
export class MobilevivoComponent {
  cartItemCount: number=0;
    products: Product[] = [
      {
        id: 1,
        title: 'Vivo V29',
        price: '₹35,999',
        imageUrl: 'assets/mobilevivo/vivo1',
        description: 'vivo V27 5G (Magic Blue, 256 GB)  (12 GB RAM)',
        options: [
          { imageUrl: 'assets/mobilevivo/vivo1.1' },
          { imageUrl: 'assets/mobilevivo/vivo1.2' },
          { imageUrl: 'assets/mobilevivo/vivo1.3' },
          { imageUrl: 'assets/mobilevivo/vivo1.4'},
          { imageUrl: 'assets/mobilevivo/vivo1.5' }
        ],
        colors: [
          {
            backgroundColor: '#B5C7E0',
            imageUrl: 'assets/mobilevivo/vivo1sliver',
            active: true,
            optionImages: [
              { imageUrl: 'assets/mobilevivo/vivo1.1sliver' },
              { imageUrl: 'assets/mobilevivo/vivo1.2sliver' },
              { imageUrl: 'assets/mobilevivo/vivo1.3sliver' },
              { imageUrl: 'assets/mobilevivo/vivo1.4sliver' },
              { imageUrl: 'assets/mobilevivo/vivo1.5sliver' },
            ]
          },
          {
            backgroundColor: '#303030',
            imageUrl: 'assets/mobilevivo/vivo1black',
            active: false,
            optionImages: [
              { imageUrl: 'assets/mobilevivo/vivo1.1black' },
              { imageUrl: 'assets/mobilevivo/vivo1.2black' },
              { imageUrl: 'assets/mobilevivo/vivo1.3black' },
              { imageUrl: 'assets/mobilevivo/vivo1.4black' },
              { imageUrl: 'assets/mobilevivo/vivo1.5black' }
            ]
          },
          {
            backgroundColor: '#A52A2A',
            imageUrl: 'assets/mobilevivo/vivo1red',
            active: true,
            optionImages: [
              { imageUrl: 'assets/mobilevivo/vivo1.1red' },
              { imageUrl: 'assets/mobilevivo/vivo1.2red' },
              { imageUrl: 'assets/mobilevivo/vivo1.3red' },
              { imageUrl: 'assets/mobilevivo/vivo1.4red' },
              { imageUrl: 'assets/mobilevivo/vivo1.5red' },
            ]
          },
          {
            backgroundColor: '#7FFFD4',
            imageUrl: 'assets/mobilevivo/vivo1green',
            active: false,
            optionImages: [
              { imageUrl: 'assets/mobilevivo/vivo1.1green' },
              { imageUrl: 'assets/mobilevivo/vivo1.2green' },
              { imageUrl: 'assets/mobilevivo/vivo1.3green' },
              { imageUrl: 'assets/mobilevivo/vivo1.4green' },
              { imageUrl: 'assets/mobilevivo/vivo1.5green' }
            ]
          }
        ],
        sizes: [{ label: '1.8 inch' }, { label: '49.784 mm' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: '16GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: '32GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 2,
        title: 'vivo v27',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo2',
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
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 3,
        title: 'Vivo Y22',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo3',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 4,
        title: 'Vivo x100',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo4x100',
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
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 5,
        title: 'Vivo mobile with Triple Camera',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo5',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 6,
        title: 'Vivo Green',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo6',
        description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
        options: [
          { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
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
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 7,
        title: 'Vivo new version',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo7',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 8,
        title: ' Vivo Y16',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo8',
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
        sizes: [{ label: 'inch' }, { label: ' inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 9,
        title: ' Vivo Y17',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo9y17',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: ' inch' }, { label: ' inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 10,
        title: ' Vivo mobile',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo10',
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
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 11,
        title: 'vivo V25',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo11v25',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 12,
        title: 'Vivo with middel camera',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo13',
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
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 13,
        title: 'vivo V23',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo13v23',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: 'assets/images/',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 14,
        title: 'women vivo mobiles',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo14',
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
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 15,
        title: 'latest vivo mobiles',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo15',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 16,
        title: 'Buy vivo',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo16',
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
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 17,
        title: 'Vivo Y22',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo17y22',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' }
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: 'assets/images/laptop5.jpeg' },
              { imageUrl: 'assets/images/laptop2.jpeg' },
              { imageUrl: 'assets/images/laptop3.jpeg' },
              { imageUrl: 'assets/images/laptop4.jpeg' },
              { imageUrl: 'assets/images/laptop1.jpeg' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 18,
        title: 'Vivo Y36',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo18y36',
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
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 19,
        title: 'Vivo Y19',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo19y19',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
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
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 20,
        title: 'vivo Y55',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo20y55',
        description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: 'assets/images/laptop7.jpeg',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'red',
            imageUrl: 'assets/images/laptop8.jpeg',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 21,
        title: 'Vivo V21',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo21v21',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 22,
        title: 'Vivox710',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo22x710',
        description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: 'assets/images/laptop7.jpeg',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'red',
            imageUrl: 'assets/images/laptop8.jpeg',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
        ]
      },
      {
        id: 23,
        title: 'Vivo Y36',
        price: '₹34,999',
        imageUrl: 'assets/mobilevivo/vivo y36',
        description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: '',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'gray',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '14 inch' }, { label: '15.6 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          { label: 'GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
        ]
      },
      {
        id: 24,
        title: 'Vivo y100',
        price: '₹64,999',
        imageUrl: 'assets/mobilevivo/vivo24y100',
        description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500',
        options: [
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' },
          { imageUrl: '' }
        ],
        colors: [
          {
            backgroundColor: 'black',
            imageUrl: 'assets/images/laptop7.jpeg',
            active: true,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          },
          {
            backgroundColor: 'red',
            imageUrl: '',
            active: false,
            optionImages: [
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
              { imageUrl: '' },
            ]
          }
        ],
        sizes: [{ label: '15.6 inch' }, { label: '17 inch' }],
        showAdditionalContent: false,
        quantity: 1,
        mainImageSrc: '',
        selectedSize: '',
        ramOptions: [
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (16 GB/1 TB SSD/Windows 10 Home) G5 5500 16GB RAM', price: '₹64,999' },
          { label: 'GB', description: 'Dell G5 Gaming Laptop Intel Core i7 10th Gen - (32 GB/1 TB SSD/Windows 10 Home) G5 5500 32GB RAM', price: '₹74,999' }
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
  
    increaseQuantity(product: Product) {
      product.quantity += 1;
    }
  
    decreaseQuantity(product: Product) {
      if (product.quantity > 1) {
        product.quantity -= 1;
      }
    }
  
    selectSize(product: Product, size: string) {
      product.selectedSize = size;
      this.updateProductDetailsBySize(product, size);
    }
  
    selectRam(product: Product, ram: string) {
      product.selectedRam = ram;
      this.updateProductDetailsByRam(product, ram);
    }
  
    updateProductDetailsByRam(product: Product, ram: string) {
      const selectedOption = product.ramOptions.find(option => option.label === ram);
      if (selectedOption) {
        product.description = selectedOption.description;
        product.price = selectedOption.price;
      } else {
        console.error(`No details found for RAM: ${ram}`);
      }
    }
  
    updateProductDetailsBySize(product: Product, size: string) {
      // Implement if needed
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
  

