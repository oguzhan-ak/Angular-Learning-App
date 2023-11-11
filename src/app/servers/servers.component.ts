import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test';
  serverCreated = false;
  servers = [
    { name: 'Test Server', id: 0 },
    { name: 'Test Server 2', id: 1 },
  ];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.servers.push({ name: this.serverName, id: this.servers.length });
    this.serverCreated = true;
    this.serverCreationStatus =
      'Server was created! Name is : ' + this.serverName;
  }
}
