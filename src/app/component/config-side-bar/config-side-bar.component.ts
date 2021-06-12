import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../interface/config';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {

  @Input() menuUser!: Menu[];
  @Input() menuWorkspace!: Menu[];
  @Input() isUser!: boolean;

  constructor() {

    this.menuUser = [
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
      },
      {
        name: "Security",
        show:false,
        value: ["Workspace"]
      }];

    this.menuWorkspace = [
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
        value: []
      },
      {
        name: "Features", 
        show:false,
        value: ["Explorer", "Search", "Debug", "Testing", "SCM", "Extensions", "Terminal", "Task", "Problems", "Output", "Comments", "Remote", "Timeline", "Notebook"]
      }];


  }

  ngOnInit(): void {
    
  }


  isSelectedUser(Item: Menu) {
    for (let item of this.menuUser) {
      if (item.name == Item.name) {
        Item.show = !Item.show;
      }
    }
  }

  isSelectedWork(Item: Menu) {
    for (let item of this.menuWorkspace) {
      if (item.name == Item.name) {
        Item.show = !Item.show;
      }
    }
  }


}
