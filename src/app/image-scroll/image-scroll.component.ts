import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageScrollButtonsComponent } from '../image-scroll-buttons/image-scroll-buttons.component';

@Component({
  selector: 'app-image-scroll',
  standalone: true,
  imports: [CommonModule, ImageScrollButtonsComponent],
  templateUrl: './image-scroll.component.html',
  styleUrls: ['./image-scroll.component.scss'],
})
export class ImageScrollComponent implements AfterViewInit {
  @ViewChild('widgetsContent', { static: false }) widgetsContent!: ElementRef;

  @Input() scrollAmount = 0;
  @Input() headerTitleTemplate: string | TemplateRef<void> = '';
  @Input() scrollButtonPosition: 'center' | 'top right' = 'center';
  @Input() marginLeftFirstElement: number = 16;
  @Input() showScrollbar: boolean = false;

  hasOverflow = false;
  overflowValue: 'left' | 'both' | 'right' = 'left';

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.checkOverflow();
    this.cdRef.detectChanges();
  }

  // Check if the contentTemplate is a string or TemplateRef
  get isStringTemplate(): boolean {
    return typeof this.headerTitleTemplate === 'string';
  }

  get headerTemplate(): TemplateRef<void> {
    return this.headerTitleTemplate as TemplateRef<void>;
  }

  onScroll(event: Event): void {
    this.updateOverflowValue();
  }

  updateOverflowValue() {
    const scrollAmount = this.widgetsContent.nativeElement.scrollLeft;
    const maxScrollAmount = this.widgetsContent.nativeElement.scrollLeftMax;
    if (scrollAmount === 0) {
      this.overflowValue = 'left';
    } else if (scrollAmount === maxScrollAmount) {
      this.overflowValue = 'right';
    } else {
      this.overflowValue = 'both';
    }
  }

  get getScrollAmount(): number {
    return this.scrollAmount === 0
      ? this.widgetsContent.nativeElement.childNodes[1].offsetLeft
      : this.scrollAmount;
  }

  checkOverflow() {
    if (this.widgetsContent) {
      const element = this.widgetsContent.nativeElement;
      this.hasOverflow =
        element.offsetHeight < element.scrollHeight ||
        element.offsetWidth < element.scrollWidth;
      this.widgetsContent.nativeElement.firstChild.style[
        'margin-left'
      ] = `${this.marginLeftFirstElement}px`;
    }
  }
}
