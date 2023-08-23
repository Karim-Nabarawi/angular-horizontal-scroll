import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { ImageScrollButtonsComponent } from '../components/scroll-buttons/scroll-buttons.component';
import {
  IMainStyles,
  IMainStylesDefault,
} from '../shared/interface/main.interface';
import { IScrollBtnStyles } from '../shared/interface/button.interface';

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
  @Input() showScrollbar: boolean = false;

  @Input() set customStyles(value: Partial<IMainStyles>) {
    this.mainStyles = {
      ...IMainStylesDefault,
      ...value,
    };
  }

  mainStyles: IMainStyles = IMainStylesDefault;

  hasOverflow = false;
  overflowValue: 'left' | 'both' | 'right' = 'left';

  @HostBinding('style.--default-elements-gap') get elementsGap() {
    return `${this.mainStyles.elementsGap}px`;
  }

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.checkOverflow();
    this.cdRef.detectChanges();
  }

  get buttonStyles(): IScrollBtnStyles {
    return this.mainStyles as IScrollBtnStyles;
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
    const elemnt = this.widgetsContent.nativeElement;
    const scrollAmount = elemnt.scrollLeft + elemnt.offsetWidth;
    const maxScrollAmount = elemnt.scrollWidth;
    if (elemnt.scrollLeft === 0) {
      this.overflowValue = 'left';
    } else if (scrollAmount === maxScrollAmount) {
      this.overflowValue = 'right';
    } else {
      this.overflowValue = 'both';
    }
  }

  get getScrollAmount(): number {
    if (this.scrollAmount === 'auto') {
      return (
        this.widgetsContent.nativeElement.childNodes[1].offsetLeft -
        this.mainStyles.firstElementLeftMargin
      );
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
      ] = `${this.mainStyles.firstElementLeftMargin}px`;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkOverflow();
  }
}
