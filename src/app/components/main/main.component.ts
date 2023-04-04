import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="container">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor() {}
}
