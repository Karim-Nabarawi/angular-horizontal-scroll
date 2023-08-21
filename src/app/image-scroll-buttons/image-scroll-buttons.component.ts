import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-scroll-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-scroll-buttons.component.html',
  styleUrls: ['./image-scroll-buttons.component.scss'],
})
export class ImageScrollButtonsComponent {
  @Input({ required: true }) widgetsContent!: HTMLDivElement;
  @Input({ required: true }) scrollAmount = 0;

  @Input({ required: true }) buttonDisplay: 'left' | 'both' | 'right' = 'left';
  @Input({ required: true }) position: 'center' | 'top right' = 'center';

  @Input() scrollButtonTemplate!: TemplateRef<void>;

  scroll(direction: 1 | -1) {
    this.widgetsContent.scrollLeft += this.scrollAmount * direction;
  }
}
