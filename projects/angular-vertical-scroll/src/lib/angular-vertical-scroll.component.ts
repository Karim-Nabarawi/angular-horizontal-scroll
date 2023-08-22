import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  IScrollBtnStyles,
  IscrollBtnDefault,
} from '../shared/interface/button.interface';
import { ImageScrollButtonsComponent } from '../components/scroll-buttons/scroll-buttons.component';

@Component({
  selector: 'vertical-scroll',
  standalone: true,
  imports: [CommonModule, ImageScrollButtonsComponent],
  templateUrl: './angular-vertical-scroll.component.html',
  styleUrls: ['./angular-vertical-scroll.component.scss'],
})
export class AngularVerticalScrollComponent {
  @ViewChild('widgetsContent', { static: false }) widgetsContent!: ElementRef;

  @Input() scrollAmount: number | 'auto' | 'full' = 'auto';
  @Input() headerTitleTemplate: string | TemplateRef<void> = '';
  @Input() scrollButtonTemplate!: TemplateRef<void>;
  @Input() scrollButtonPosition: 'center' | 'top right' = 'center';
  @Input() marginLeftFirstElement: number = 16;
  @Input() showScrollbar: boolean = false;

  @Input() set customStyles(value: Partial<IScrollBtnStyles>) {
    this.buttonStyles = {
      ...IscrollBtnDefault,
      ...value,
    };
  }

  buttonStyles: IScrollBtnStyles = {
    btnBgColor: 'rgba(0, 0, 0, 0.3)',
    arrowColor: 'rgb(255, 255, 255)',
    btnScale: 1,
  };

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
    if (this.scrollAmount === 'auto') {
      return this.widgetsContent.nativeElement.childNodes[1].offsetLeft;
    } else if (this.scrollAmount === 'full') {
      return (
        this.widgetsContent.nativeElement.offsetWidth -
        this.widgetsContent.nativeElement.childNodes[1].offsetLeft
      );
    }
    return this.scrollAmount;
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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkOverflow();
  }
}
