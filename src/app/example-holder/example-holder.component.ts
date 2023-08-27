import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-example-holder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <div class="content-wrapper">
        <ng-content></ng-content>
      </div>
      <div class="explanation">
        {{ explanation }}
      </div>
    </div>
  `,
  styleUrls: ['./example-holder.component.scss'],
})
export class ExampleHolderComponent {
  @Input({ required: true }) explanation: string = '';
}
