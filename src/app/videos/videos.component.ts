import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [],
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeVideoCarousel();
    }
  }

  private initializeVideoCarousel() {
    let currentVideoIndex = 0;
    const videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.carousel .list .item video');
    const items: NodeListOf<HTMLElement> = document.querySelectorAll('.carousel .list .item');

    function playNextVideo() {
      videos[currentVideoIndex].pause();
      items[currentVideoIndex].style.opacity = '0'; // Hide the current item

      currentVideoIndex = (currentVideoIndex + 1) % videos.length;

      items[currentVideoIndex].style.opacity = '1'; // Show the next item
      videos[currentVideoIndex].currentTime = 0; // Reset time
      videos[currentVideoIndex].play();
    }

    videos.forEach((video, index) => {
      video.addEventListener('ended', playNextVideo);

      // Initially hide all items except the first one
      if (index !== 0) {
        items[index].style.opacity = '0';
      }
    });

    // Start playing the first video
    videos[0].play();

    // Handling Next and Prev buttons
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    if (nextButton) {
      nextButton.onclick = playNextVideo;
    }

    if (prevButton) {
      prevButton.onclick = () => {
        videos[currentVideoIndex].pause();
        items[currentVideoIndex].style.opacity = '0';

        currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;

        items[currentVideoIndex].style.opacity = '1';
        videos[currentVideoIndex].currentTime = 0;
        videos[currentVideoIndex].play();
      };
    }

    // Handling Thumbnail Videos
    const thumbnails: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.thumbnail .item video');

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener('click', () => {
        videos[currentVideoIndex].pause(); // Pause the currently playing video
        items[currentVideoIndex].style.opacity = '0'; // Hide the currently displayed item

        currentVideoIndex = index; // Update the current video index

        items[currentVideoIndex].style.opacity = '1'; // Show the corresponding item from the carousel
        videos[currentVideoIndex].currentTime = 0; // Reset time
        videos[currentVideoIndex].play(); // Play the corresponding video
      });
    });
  }
}