import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slideshow',
  templateUrl: './home-slideshow.component.html',
  styleUrls: ['./home-slideshow.component.scss'],
})
export class HomeSlideshowComponent implements OnInit {
  startIndex: number = 0;
  Imagedata: string[] = [
    '../../../../assets/images/home-slideshow/102400895_175704977245017_3585073435022811530_o.jpg',
    '../../../../assets/images/home-slideshow/102916538_175704993911682_6904910685335440818_o.jpg',
    '../../../../assets/images/home-slideshow/96822963_167063941442454_2584256769458962432_o.jpg',
    '../../../../assets/images/home-slideshow/98147180_169492494532932_2948448972294848512_o.jpg',
  ];
  ngOnInit() {
    setTimeout(() => this.__FunctionSlide(), 1);
    this.Repeat();
  }

  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 4000);
  }

  __FunctionSlide() {
    const slides = Array.from(
      document.getElementsByClassName('mall-show-slide')
    );
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }
}
