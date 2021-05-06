import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //you can select by attribute instead of by tag by using []
  // selector: '[app-servers]',
  //you can also select by class
  // selector: '.app-servers',
  //id, hover and pseudo selctors dont work
  templateUrl: './servers.component.html',
  // template: `<app-server></app-server> <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  allowNewServer = false;
  serverName = 'Default';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];

  serverCreationStatus = 'No server was created!';
  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created. Name is ' + this.serverName;
  }
  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
