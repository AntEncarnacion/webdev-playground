import { Component, EventEmitter, Input, Output, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent implements OnInit {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  users: string[] = [];
  ngOnInit() {
    this.users = this.userService.inactiveUsers;
  }
  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}
  onSetToActive(id: number) {
    this.userService.activate(id);
  }
}
