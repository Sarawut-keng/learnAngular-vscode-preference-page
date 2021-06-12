import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ConfigPageHeaderComponent } from '../config-page-header/config-page-header.component';

@Component({
  selector: 'app-config-page',
  templateUrl: './config-page.component.html',
  styleUrls: ['./config-page.component.css']
})
export class ConfigPageComponent implements OnInit {

  itIsUser!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  clickUser(isUser: boolean) {
   this.itIsUser = isUser;
  }

}
