import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  onServerCreate = 'Server has not been created';
  serverName = '';
  serverCreated = false;
  servers = [];
  constructor() {
    setTimeout(() => {
       this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onServerButtonClick() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.onServerCreate = 'Server has been created' + ' with server name - ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
    console.log(this.serverName);
  }

}
