import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Config } from '../../interface/config';

@Component({
  selector: 'app-config-item',
  templateUrl: './config-item.component.html',
  styleUrls: ['./config-item.component.css']
})
export class ConfigItemComponent implements OnInit {

  @Input() configItem!: Config;

  constructor() { }

  ngOnInit(): void {
  }


}
