import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../interface/config';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {

  @Input() menu!: Menu[];


  constructor() {

    this.menu = [
      {
        name:"Text Edit",
        show: false,
        value: ["Cursor", "Find", "Font", "Formatting", "Diff Editor", "Minimap", "Suggestions", "Files"]
      },
      {
        name: "Workbench",
        show: false,
        value: ["Appearance", "Breadcrumbs", "Editor Management", "Settings Editor", "Zen Mode", "Screencast Mode"]
      },
      {
        name: "Window",
        show: false,
        value: ["New Window"]
      },
      {
        name: "Features", 
        show:false,
        value: ["Explorer", "Search", "Debug", "Testing", "SCM", "Extensions", "Terminal", "Task", "Problems", "Output", "Comments", "Remote", "Timeline", "Notebook"]
      }];
  }

  ngOnInit(): void {
  }

  isSelected(Item: Menu) {
    for (let item of this.menu) {
      if (item.name == Item.name) {
        Item.show = !Item.show;
      }
    }
  }


}
