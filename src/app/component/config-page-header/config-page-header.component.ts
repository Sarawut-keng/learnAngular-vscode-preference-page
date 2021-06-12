import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-config-page-header',
  templateUrl: './config-page-header.component.html',
  styleUrls: ['./config-page-header.component.css']
})
export class ConfigPageHeaderComponent implements OnInit {

  @Output() onUser = new EventEmitter<boolean>();
  @Output() onWorkspace  = new EventEmitter<boolean>();

  isTrue: boolean = true;
  isFalse: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickUser(logic: boolean) {
    this.onUser.emit(logic);
  }

}
