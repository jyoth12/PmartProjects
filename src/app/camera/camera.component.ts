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
  // selectedSize?: string;
  // ramOptions: { label: string, description: string, price: string }[];
  // selectedRam?: string;
}
@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css'
})
export class CameraComponent {
cartItemCount:number=0;
      products: Product[] = [
        {
          id: 1,
          title: 'Vivo V29',
          price: '₹35,999',
          imageUrl: '/assets/cameras/6bestcameras',
          description: 'vivo V27 5G (Magic Blue, 256 GB)  (12 GB RAM) a device that consists of a lightproof chamber with an aperture fitted with a lens and a shutter through which the image of an object is projected onto a surface for recording (as on a photosensitive film or an electronic sensor) or for translation into electrical impulses (as for television broadcast)`',
          options: [
            { imageUrl: '/assets/cameras/c1.1' },
            { imageUrl: '/assets/cameras/c1.2' },
            { imageUrl: '/assets/cameras/c1.3' },
            { imageUrl: '/assets/cameras/c1.4'},
            { imageUrl: '/assets/cameras/c1.5' }
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
          // ramOptions: [
          //   { label: '16GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (8 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 8GB RAM', price: '₹34,999' },
          //   { label: '32GB', description: 'MSI Modern 14 Intel Core i3 12th Gen 1215U - (16 GB/512 GB SSD/Windows 11 Home) Modern 14 C12M-444IN 16GB RAM', price: '₹39,999' }
          // ]
        },
        {
          id: 2,
          title: 'vivo v27',
          price: '₹64,999',
          imageUrl: '/assets/cameras/ai camera',
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
        },
        {
          id: 3,
          title: 'Vivo Y22',
          price: '₹34,999',
          imageUrl: '/assets/cameras/aicamerastockphotos',
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
        
        },
        {
          id: 4,
          title: 'Vivo x100',
          price: '₹64,999',
          imageUrl: '/assets/cameras/aitrackingphotography',
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
          
        },
        {
          id: 5,
          title: 'Vivo mobile with Triple Camera',
          price: '₹34,999',
          imageUrl: '/assets/cameras/c1',
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
          
        },
        {
          id: 6,
          title: 'Vivo Green',
          price: '₹64,999',
          imageUrl: '/assets/cameras/c2 desidns inspired by popup',
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
         
        },
        {
          id: 7,
          title: 'Vivo new version',
          price: '₹34,999',
          imageUrl: '/assets/cameras/camera with mobile',
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
          
        },
        {
          id: 8,
          title: ' Vivo Y16',
          price: '₹64,999',
          imageUrl: '/assets/cameras/canon are using',
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
          
        },
        {
          id: 9,
          title: ' Vivo Y17',
          price: '₹34,999',
          imageUrl: '/assets/cameras/canondigital',
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
         
        },
        {
          id: 10,
          title: ' Vivo mobile',
          price: '₹64,999',
          imageUrl: '/assets/cameras/coolest',
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
          
        },
        {
          id: 11,
          title: 'vivo V25',
          price: '₹34,999',
          imageUrl: '/assets/cameras/digitalcamera',
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
          
        },
        {
          id: 12,
          title: 'Vivo with middel camera',
          price: '₹64,999',
          imageUrl: '/assets/cameras/dslr',
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
         
        },
        {
          id: 13,
          title: 'vivo V23',
          price: '₹34,999',
          imageUrl: '/assets/cameras/instax',
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
        },
        {
          id: 14,
          title: 'women vivo mobiles',
          price: '₹64,999',
          imageUrl: '/assets/cameras/kidadigitalcamera',
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
          
        },
        {
          id: 15,
          title: 'latest vivo mobiles',
          price: '₹34,999',
          imageUrl: '/assets/cameras/ndb4kultra',
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
          
        },
        {
          id: 16,
          title: 'Buy vivo',
          price: '₹64,999',
          imageUrl: '/assets/cameras/latestcameras',
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
          
        },
        {
          id: 17,
          title: 'Vivo Y22',
          price: '₹34,999',
          imageUrl: '/assets/cameras/ndb4kwifidigital',
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
          
        },
        {
          id: 18,
          title: 'Vivo Y36',
          price: '₹64,999',
          imageUrl: '/assets/cameras/newmodal',
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
          
        },
        {
          id: 19,
          title: 'Vivo Y19',
          price: '₹34,999',
          imageUrl: '/assets/cameras/osi',
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
        },
        {
          id: 20,
          title: 'vivo Y55',
          price: '₹64,999',
          imageUrl: '/assets/cameras/papershootcamera',
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
         
        },
        {
          id: 21,
          title: 'Vivo V21',
          price: '₹34,999',
          imageUrl: '/assets/cameras/smallfunctionshoot',
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
          
        },
        {
          id: 22,
          title: 'Vivox710',
          price: '₹64,999',
          imageUrl: '/assets/cameras/sonya7c',
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
         
        },
        {
          id: 23,
          title: 'Vivo Y36',
          price: '₹34,999',
          imageUrl: '/assets/cameras/trending ai generation',
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
          
        },
        {
          id: 24,
          title: 'Vivo y100',
          price: '₹64,999',
          imageUrl: '/assets/cameras/waterproof',
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
    
      // selectSize(product: Product, size: string) {
      //   product.selectedSize = size;
      //   this.updateProductDetailsBySize(product, size);
      // }
    
      // selectRam(product: Product, ram: string) {
      //   product.selectedRam = ram;
      //   this.updateProductDetailsByRam(product, ram);
      // }
    
      // updateProductDetailsByRam(product: Product, ram: string) {
      //   const selectedOption = product.ramOptions.find(option => option.label === ram);
      //   if (selectedOption) {
      //     product.description = selectedOption.description;
      //     product.price = selectedOption.price;
      //   } else {
      //     console.error(No details found for RAM: ${ram});
      //   }
      // }
    
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