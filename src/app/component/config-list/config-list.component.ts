import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../interface/config';

@Component({
  selector: 'app-config-list',
  templateUrl: './config-list.component.html',
  styleUrls: ['./config-list.component.css']
})
export class ConfigListComponent implements OnInit {

  @Input() CommonlyUsed!: Config[];
  //text-editor
  @Input() TextEditor!: Config[];
  @Input() cursor!: Config[];
  @Input() find!: Config[];
  @Input() font!: Config[];
  @Input() formatting!: Config[];
  @Input() diffEditor!: Config[];
  @Input() minimap!: Config[];
  @Input() suggestions!: Config[];
  @Input() files!: Config[];
  //Workbench
  @Input() Workbench!: Config[];
  @Input() appearance!: Config[];
  @Input() breadcrumbs!: Config[];
  @Input() editorManagement!: Config[];
  @Input() settingsEditor!: Config[];
  @Input() zenMode!: Config[];
  @Input() screencastMode!: Config[];
  //window
  @Input() Window!: Config[];
  @Input() newWindow!: Config[];
  //Features
  @Input() explorer!: Config[];
  @Input() search!: Config[];
  @Input() debug!: Config[];
  @Input() testing!: Config[];
  @Input() scm!: Config[];
  @Input() extensions!: Config[];
  @Input() terminal!: Config[];
  @Input() task!: Config[];
  @Input() problems!: Config[];
  @Input() output!: Config[];
  @Input() comments!: Config[];
  @Input() remote!: Config[];
  @Input() timeline!: Config[];
  @Input() notebook!: Config[];
  //Application
  @Input() proxy!: Config[];
  @Input() keyboard!: Config[];
  @Input() update!: Config[];
  @Input() telemetry!: Config[];
  @Input() settingsSync!: Config[];
  //Security
  @Input() workspace!: Config[];
  //Extensions
  @Input() angularLanguageService!: Config[];
  @Input() git!: Config[];

  

  constructor() { 
    this.CommonlyUsed = [{
      name: "Files: Auto Save",
      description: "Controls auto save of dirty editors. Read more about autosave here.",
      type: 2,
      dropdown: ["off", "afterDelay", "onFocusChange", "onWindowChange"]
    },
    {
      name: "Editor: Font Size",
      description: "Controls the font size in pixels.",
      type: 0,
      text: "12"
    },
    {
      name: "Editor: Font Family",
      description: "Controls the font family",
      type: 0,
      text: "Menlo, Monaco, 'Courier New', monospace,'mesloLGF NF'"
    },
    {
      name: "Editor: Tab Size",
      description: "The number of spaces a tab is equal to. This setting is overriden based on the file contents when Editor: Detect Indentation is on.",
      type: 0,
      text: "4"
    },
    {
      name: "Editor: Render Whitespace",
      description: "Controls how the editor should render whitesspace characters.",
      type: 2,
      dropdown: ["none", "boundary", "selection", "trailing", "all"]
    },
    {
      name: "Editor: Cursor Style",
      description: "Controls the cursor style.",
      type: 2,
      dropdown: ["line", "block", "underline", "line-thin", "block-outline", "underline-thin"]
    },
    {
      name: "Editor: Multi Cursor Modifier",
      description: "The modifier to be used to add multiple cursors with the mouse. The go to definition and open link nouse gestures will adapt such that they do not conflict with the multicursor mmodifier.",
      type: 2,
      dropdown: ["ctrlCMD", "alt"]
    },
    {
      name: "Editor: Insert Spaces",
      description: "Insert spaces when pressing Tab. This setting is overriden based in the file contents when Editor: Detect Indentation is on.",
      type: 1
    },
    {
      name: "Editor: Word Wrap",
      description: "Controls how lines should wrap.",
      type: 2,
      dropdown: ["off", "on", "wordWrapColumn", "bound"]
    },
    {
      name: "Files: Exclude",
      description: "Configure glob patterns for excluding files and folders. For example, the file Explorer decides which files and folders to show or hide based on this setting. Refer to the Search: Exclude setting to define search specific excludes. Read more about glob patterns here.",
      type: 3,
      button: "Add Pattern"
    },
    {
      name: "Files: Associations",
      description: "Configure file associations to languages (e.g. '*.extension': 'html'). These have precedence over the default associations of the languages installed.",
      type: 3,
      button: "Add Item"
    },
    {
      name: "Workbench > Editor: Enable Preview",
      description: "Controls wheter opened editors show as preview. Preview editors do not keep open and are reused until explicitly set to be kept open",
      type: 1
    }]
  }

  ngOnInit(): void {
  }

}
