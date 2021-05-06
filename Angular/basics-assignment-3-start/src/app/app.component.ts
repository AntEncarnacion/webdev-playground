import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  toggle = false;
  accumulatorArray = [];

  toggleDetails() {
    this.toggle = !this.toggle;
    this.accumulatorArray.push(new Date());
  }
  checkFifth() {
    return this.accumulatorArray.length > 4 ? true : false;
  }
}
