import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  color: string;
  constructor() {}
  setColor(color: string) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}
