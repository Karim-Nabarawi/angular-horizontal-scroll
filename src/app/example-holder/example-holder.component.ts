import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-example-holder',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './example-holder.component.html',
  styleUrls: ['./example-holder.component.scss'],
})
export class ExampleHolderComponent {
  @Input({ required: true }) explanation: string = '';
  @Input() code: string = '';

  displayCode = false;
  isCopped = false;
  actionStyle = 'border-bottom: none;';

  constructor() {}

  showCode() {
    this.displayCode = !this.displayCode;
    this.actionStyle = this.displayCode
      ? 'border-bottom: 1px dashed rgba(5, 5, 5, 0.06);'
      : 'border-bottom: none;';
  }

  copyCode() {
    navigator.clipboard.writeText(this.code);
    this.isCopped = true;
    setTimeout(() => {
      this.isCopped = false;
    }, 1000);
  }
}
