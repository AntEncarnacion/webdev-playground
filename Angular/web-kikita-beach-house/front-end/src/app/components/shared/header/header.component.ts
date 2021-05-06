import { Component, OnInit, HostListener } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { debounceTime, throttle } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  fixed: boolean;
  relative: boolean;
  backgroundColor: boolean;
  innerWidth: number;
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
  constructor() {}

  ngOnInit(): void {
    // Fixed scroll affect
    this.fixed = true;
    this.relative = false;

    fromEvent(window, 'scroll')
      .pipe(
        debounceTime(10),
        throttle((ev) => interval(10))
      )
      .subscribe((e) => {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth > 600) {
          if (window.scrollY > 0 && window.scrollY < 520) {
            this.fixed = true;
            this.relative = false;
            this.backgroundColor = false;
          }
          if (window.scrollY > 520) {
            this.fixed = true;
            this.relative = false;
            this.backgroundColor = true;
          }

          if (window.scrollY > 900) {
            this.fixed = false;
            this.relative = true;
            this.backgroundColor = true;
          }
        } else {
          console.log(window.scrollY);
          if (window.scrollY > 0 && window.scrollY < 277) {
            this.fixed = true;
            this.relative = false;
            this.backgroundColor = false;
          }
          if (window.scrollY > 277) {
            this.fixed = false;
            this.relative = true;
            this.backgroundColor = false;
          }

          // if (window.scrollY > 900) {
          //   this.fixed = false;
          //   this.relative = true;
          //   this.backgroundColor = true;
          // }
        }
      });
  }
}
