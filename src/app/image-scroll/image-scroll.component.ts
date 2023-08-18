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

  @Input() scrollAmount = 150;

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= this.scrollAmount;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += this.scrollAmount;
  }
}
