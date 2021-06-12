import { Component, Input, OnInit } from '@angular/core';
import { Config } from '../../interface/config';
import { ConfigItemComponent } from '../config-item/config-item.component';

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
    }];

    this.TextEditor = [
      {
        name: "Accessibility Page Size",
        description: "Controls the number of lines in the editor that can be read out by a screen reader at once. When we detect a screen reader we automatically set the default to be 500. Warning: this has a performance implication for numbers larger than the default.",
        type: 0,
        text: "10"
      },
      {
        name: "Accessibility Support",
        description: "Controls whether the editor should run in a mode where it is optimized for screen readers. Setting to on will disable word wrapping.",
        type: 2,
        dropdown: ["auto", "on", "off"]
      },
      {
        name: "Auto Closing Brackets",
        description: "Controls whether the editor should automatically close brackets after the user adds an opening bracket.",
        type: 2,
        dropdown: ["always", "languageDefine", "beforeWhitespace", "never"]
      },
      {
        name: "Auto Closing Delete",
        description: "Controls whether the editor should remove adjacent closing quotes or brackets when deleting.",
        type: 2,
        dropdown: ["always", "auto", "never"]
      },
      {
        name: "Auto Closing Overtype",
        description: "Controls whether the editor should type over closing quotes or brackets.",
        type: 2,
        dropdown: ["always", "auto", "never"]
      },
      {
        name: "Auto Closing Quotes",
        description: "Controls whether the editor should automatically close quotes after the user adds an opening quote.",
        type: 2,
        dropdown: ["always", "languageDefine", "beforeWhitespace", "never"]
      },
      {
        name: "Auto Indent",
        description: "Controls whether the editor should automatically adjust the indentation when users type, paste, move or indent lines.",
        type: 2,
        dropdown: ["none", "keep", "bracket", "Advance", "Full"]
      },
      {
        name: "Auto Surround",
        description: "Controls whether the editor should automatically surround selections when typing quotes or brackets.",
        type: 2,
        dropdown: ["always", "languageDefine", "beforeWhitespace", "never"]
      },
      {
        name: "Code Actions On Save",
        description: "Code action kinds to be run on save",
        type: 3,
        button: "Edit in settings.json"
      },
      {
        name: "Code Lens",
        description: "Controls whether the editor shows CodeLens.",
        type: 1
      },
      {
        name: "Code Lens Font Family",
        description: "Controls the font family for CodeLens.",
        type: 0,
        text: ""
      },
      {
        name: "Code Lens Font Size",
        description: "Controls the font size in pixels for CodeLens. When set to `0`, the 90% of `#editor.fontSize#` is used.",
        type: 0,
        text: "0"
      },
      {
        name: "Color Decorators",
        description: "Controls whether the editor should render the inline color decorators and color picker.",
        type: 1
      },
      {
        name: "Column Selection",
        description: "Enable that the selection with mouse and keys is doing column selection.",
        type: 1
      },
      {
        name: "Comments: Ignore Empty Lines",
        description: "Controls if empty lines should be ignores with toggle, add or remove actions for line comments.",
        type: 1
      }
    ]
  }

  ngOnInit(): void {
  }


}
