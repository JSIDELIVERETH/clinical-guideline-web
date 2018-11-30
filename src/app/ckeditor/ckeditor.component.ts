import { Component } from '@angular/core';

  @Component({
  selector: 'app-ckeditor',
  template: `
  <ckeditor
    [(ngModel)]="ckeditorContent"
    [config]="{uiColor: '#a4a4a4'}"
    (change)="onChange($event)"
    (ready)="onReady($event)"
    (focus)="onFocus($event)"
    (blur)="onBlur($event)"
    debounce="500">
  </ckeditor>
  `,
})
export class CkEditorComponent {
  private ckeditorContent: string;
  constructor() {
    this.ckeditorContent = ``;
  }
}