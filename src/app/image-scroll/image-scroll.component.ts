import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-scroll.component.html',
  styleUrls: ['./image-scroll.component.scss'],
})
export class ImageScrollComponent {
  @ViewChild('widgetsContent') widgetsContent!: ElementRef;

  @Input() scrollAmount = 0;
  @Input() scrollGap = 16;

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= this.getScrollAmount();
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += this.getScrollAmount();
  }

  getScrollAmount() {
    return this.scrollAmount === 0
      ? this.widgetsContent.nativeElement.firstChild.offsetWidth +
          this.scrollGap
      : this.scrollAmount;
  }
}
