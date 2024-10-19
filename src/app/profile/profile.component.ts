import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  
  @ViewChild('video')
  video!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas')
  canvas!: ElementRef<HTMLCanvasElement>;
  showProfilePhotoOptions = false;
  isCameraActive = false;
  user = {
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    pincode: '',
    address: ''
  };
  selectedProfilePhoto: string | ArrayBuffer | null = null;

  ngOnInit() {
    if (this.isLocalStorageAvailable()) {
      const savedPhoto = localStorage.getItem('profilePhoto');
      if (savedPhoto) {
        this.selectedProfilePhoto = savedPhoto;
      }
    }
  }

  openProfilePhotoOptions() {
    this.showProfilePhotoOptions = true;
  }

  startCamera() {
    this.isCameraActive = true;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
      })
      .catch(err => {
        console.error("Error accessing camera: ", err);
      });
  }

  capturePhoto() {
    const video = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.selectedProfilePhoto = canvas.toDataURL('image/png');
      this.isCameraActive = false;
      this.showProfilePhotoOptions = false;
      if (this.isLocalStorageAvailable()) {
        localStorage.setItem('profilePhoto', this.selectedProfilePhoto as string);
      }
    }
  }

  handleFileSelect(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const target = e.target as FileReader;
        this.selectedProfilePhoto = target.result;
        if (this.isLocalStorageAvailable()) {
          localStorage.setItem('profilePhoto', target.result as string);
        }
        this.showProfilePhotoOptions = false;
      };
      reader.readAsDataURL(file);
    }
  }

  submit() {
    console.log('User data:', this.user);
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'localStorageTest';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
  
}
