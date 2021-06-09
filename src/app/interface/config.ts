export interface Config {
    name: string;
    description: string;
    type: number; //0 for text, 1 for checkbox, 2 for dropdown
    dropdown?: string[];
    button?: string;
    text?: string;
}


export interface Menu {
    name: string;
    show: boolean;
    value: string[];
  }
