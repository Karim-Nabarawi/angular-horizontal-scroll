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
/**
 * Represents the horizontal scroll component's input properties.
 *
 * @see {@link AngularHorizontalScrollComponent} for the main component.
 * @usageNotes
 * This component provides horizontal scrolling functionality for content. You can customize its appearance
 * and behavior using the input properties provided by {@link AngularHorizontalScrollInput}.
 *
 * Usage example:
 * ```html
 * <horizontal-scroll
 *   [scrollAmount]="100"
 *   [headerTitleTemplate]="customHeaderTemplate"
 *   [scrollButtonTemplate]="customButtonTemplate"
 *   [scrollButtonPosition]="'top right'"
 *   [showScrollbar]="true"
 *   [customStyles]="customStylesObject"
 * ></horizontal-scroll>
 * ```
 */
@Component({
  selector: 'horizontal-scroll',
  standalone: true,
  imports: [CommonModule, ImageScrollButtonsComponent],
  templateUrl: './angular-horizontal-scroll.component.html',
  styleUrls: ['./angular-horizontal-scroll.component.scss'],
})
export class AngularHorizontalScrollComponent {
  @ViewChild('widgetsContent', { static: false }) widgetsContent!: ElementRef;

  /**
   *  Callback function triggered on scroll.
   * @type {() => void}
   * @default () => {}
   */
  @Input() onScroll: () => void = () => {};
  /**
   *  Callback function triggered when the right button is clicked.
   * @type {() => void}
   * @default () => {}
   */
  @Input() onRightBtnClick: () => void = () => {};
  /**
   * Callback function triggered when the left button is clicked.
   * @type {() => void}
   * @default () => {}
   */
  @Input() onLeftBtnClick: () => void = () => {};

  /**
   * @description The amount to scroll when the user interacts with the component.
   * @default 'auto'
   * @usageNotes
   * - 'auto': Calculated based on the first element size.
   * - 'full': Calculated based on full content width except one element.
   * - number: Scroll change in pixels.
   */
  @Input() scrollAmount: number | 'auto' | 'full' = 'auto';
  /**
   * @description
   * The template for the header title of the scroll component.
   * Can be a string or a TemplateRef<void> instance.
   * @default ''
   */
  @Input() headerTitleTemplate: string | TemplateRef<void> = '';
  /**
   * @description
   * The template for the scroll buttons in the scroll component.
   * Must be a TemplateRef<void> instance.
   */
  @Input() scrollButtonTemplate!: TemplateRef<void>;
  /**
   * @description
   * The position of the scroll buttons.
   * @usageNotes
   * - 'center': Place the scroll buttons in the center.
   * - 'top right': Place the scroll buttons at the top right corner.
   * @default 'center'
   */
  @Input() scrollButtonPosition: 'center' | 'top right' = 'center';
  /**
   * @description
   * Determines whether the scrollbar is shown in the scroll component.
   * @default false
   */
  @Input() showScrollbar: boolean = false;

  /**
   * @description
   * Custom styles to apply to the scroll component.
   * @see {@link IMainStyles} for available style properties.
   */

  @Input() set customStyles(value: Partial<IMainStyles>) {
    this.mainStyles = {
      ...IMainStylesDefault,
      ...value,
    };

    //default firstAndLastElementGap to be same as elements gap when not set for equal spacing
    this.mainStyles.firstAndLastElementGap = value.firstAndLastElementGap
      ? value.firstAndLastElementGap
      : this.mainStyles.elementsGap;

    if (this.widgetsContent) {
      this.widgetsContent.nativeElement.firstChild.style[
        'margin-left'
      ] = `${this.mainStyles.firstAndLastElementGap}px`;
      this.widgetsContent.nativeElement.lastElementChild.style[
        'margin-right'
      ] = `${this.mainStyles.firstAndLastElementGap}px`;
    }
  }

  mainStyles: IMainStyles = IMainStylesDefault;

  hasOverflow = false;
  overflowValue: 'left' | 'both' | 'right' = 'left';

  @HostBinding('style.--default-elements-gap') get elementsGap() {
    return `${this.mainStyles.elementsGap}px`;
  }
  @HostBinding('style.--scrollbar-padding') get scrollbarPadding() {
    return this.showScrollbar ? '0 0 16px' : '0px';
  }
  @HostBinding('style.--container-gap') get containerGap() {
    return `${this.mainStyles.containerGap}px`;
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

  scroll(event: Event): void {
    this.onScroll();
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
        this.mainStyles.firstAndLastElementGap
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
      ] = `${this.mainStyles.firstAndLastElementGap}px`;
      this.widgetsContent.nativeElement.lastElementChild.style[
        'margin-right'
      ] = `${this.mainStyles.firstAndLastElementGap}px`;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkOverflow();
  }
}
