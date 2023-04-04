import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header [title]="title"></app-header>
    <app-main>
      <router-outlet></router-outlet>
    </app-main>
    <app-footer></app-footer>
  `,
})
export class AppComponent {
  title: string = 'Faux Store';
}
