import { Component, OnInit, Input } from '@angular/core';
import { ColorService } from 'src/app/color.service';

@Component({
  selector: 'app-solid-background',
  templateUrl: './solid-background.component.html',
  styleUrls: ['./solid-background.component.scss'],
})
export class SolidBackgroundComponent implements OnInit {
  currentBG: string;
  color: string;
  constructor(public colorService: ColorService) {}

  ngOnInit(): void {
    this.setColor(this.randomColor());
  }

  randomColor(): string {
    return '#' + ((Math.random() * 0xffffff) << 0).toString(16);
  }
  setColor(color: string) {
    this.colorService.setColor(color);
    this.color = this.colorService.getColor();
    this.currentBG = 'background-color: ' + this.colorService.getColor() + ';';
  }
}
