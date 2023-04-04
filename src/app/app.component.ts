import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="title"></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title: string = 'Faux Store';
}
