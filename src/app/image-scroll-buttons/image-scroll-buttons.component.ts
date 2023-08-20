import { Component, ElementRef, Input, TemplateRef } from '@angular/core';
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

  scrollLeft() {
    this.widgetsContent.scrollLeft -= this.scrollAmount;
    console.log(this.scrollButtonTemplate);
  }

  scrollRight() {
    this.widgetsContent.scrollLeft += this.scrollAmount;
  }
}
