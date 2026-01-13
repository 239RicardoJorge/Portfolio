export interface CodeState {
  html: string;
  css: string;
  js: string;
}

export enum EditorTab {
  HTML = 'HTML',
  CSS = 'CSS',
  JS = 'JS'
}

export interface GeneratedCodeResponse {
  html: string;
  css: string;
  javascript: string;
  explanation?: string;
}
