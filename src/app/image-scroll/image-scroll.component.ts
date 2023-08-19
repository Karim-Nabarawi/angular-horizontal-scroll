import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-scroll.component.html',
  styleUrls: ['./image-scroll.component.scss'],
})
export class ImageScrollComponent implements AfterViewInit {
  @ViewChild('widgetsContent', { static: false }) widgetsContent!: ElementRef;

  @Input() scrollAmount = 0;
  @Input() scrollGap = 16;

  hasOverflow = false;

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.checkOverflow();
    this.cdRef.detectChanges();
  }

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= this.getScrollAmount();
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += this.getScrollAmount();
    this.checkOverflow();
  }

  getScrollAmount() {
    return this.scrollAmount === 0
      ? this.widgetsContent.nativeElement.firstChild.offsetWidth +
          this.scrollGap
      : this.scrollAmount;
  }

  checkOverflow() {
    if (this.widgetsContent) {
      const element = this.widgetsContent.nativeElement;
      this.hasOverflow =
        element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkOverflow();
  };
}
