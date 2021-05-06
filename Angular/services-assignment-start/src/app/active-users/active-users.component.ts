import { Component, OnInit } from "@angular/core";
import { UserService } from "../user.service";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: string[] = [];

  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();
  constructor(
    private userService: UserService,
    private counterService: CounterService
  ) {}
  // onSetToInactive(id: number) {
  //   this.userSetToInactive.emit(id);
  // }
  ngOnInit() {
    this.activeUsers = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.deactivate(id);
  }
}
