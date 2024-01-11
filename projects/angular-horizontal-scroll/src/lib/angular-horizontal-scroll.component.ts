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
  Output,
  EventEmitter,
  AfterViewChecked,
} from '@angular/core';

import { ImageScrollButtonsComponent } from '../components/scroll-buttons/scroll-buttons.component';

import {
  ButtonStyles,
  ButtonStylesDefault,
  ContainerStyles,
  ContainerStylesDefault,
} from '../shared/interface';

/**
 * Represents the horizontal scroll component's input properties.
 *
 * @see {@link AngularHorizontalScroll} for the main component.
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
 *   [buttonStyles]="ButtonStyles"
 *   [containerStyles]="ContainerStyles"
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
export class AngularHorizontalScroll implements AfterViewChecked {
  @ViewChild('widgetsContent', { static: false }) widgetsContent!: ElementRef;

  /**
   * EventEmitter that emits an event when the user scrolls.
   *
   * @type {EventEmitter<void>}
   */
  @Output() onScroll: EventEmitter<void> = new EventEmitter<void>();

  /**
   * EventEmitter that emits an event when the right button is clicked.
   *
   * @type {EventEmitter<void>}
   */
  @Output() onRightBtnClick: EventEmitter<void> = new EventEmitter<void>();

  /**
   * EventEmitter that emits an event when the left button is clicked.
   *
   * @type {EventEmitter<void>}
   */
  @Output() onLeftBtnClick: EventEmitter<void> = new EventEmitter<void>();

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
   * Custom styles for buttons.
   * @see {@link ButtonStyles} for available style properties.
   */

  @Input() set buttonStyles(value: Partial<ButtonStyles>) {
    this.buttonsStyle = {
      ...ButtonStylesDefault,
      ...value,
    };
  }

  /**
   * @description
   * Custom styles for the container.
   * @see {@link ContainerStyles} for available style properties.
   */

  @Input() set containerStyles(value: Partial<ContainerStyles>) {
    this.mainStyles = {
      ...ContainerStylesDefault,
      ...value,
    };

    this.checkOverflow();
    this.cdRef.detectChanges();
  }

  mainStyles: ContainerStyles = ContainerStylesDefault;
  buttonsStyle: ButtonStyles = ButtonStylesDefault;

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
  @HostBinding('style.--flex-direction') get containerDirection() {
    return this.mainStyles.reverseDirection ? 'row-reverse' : 'row';
  }

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewChecked() {
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

  scroll(): void {
    this.onScroll.emit();
    this.updateOverflowValue();
  }

  onBtnClick(btn: 'left' | 'right'): void {
    btn === 'left' ? this.onLeftBtnClick.emit() : this.onRightBtnClick.emit();
  }

  updateOverflowValue() {
    const direction = this.mainStyles.reverseDirection ? -1 : 1;
    const element = this.widgetsContent.nativeElement;
    const scrollAmount = element.scrollLeft + element.offsetWidth * direction;
    const maxScrollAmount = element.scrollWidth;
    if (element.scrollLeft === 0) {
      this.overflowValue = 'left';
    } else if (Math.abs(scrollAmount) === maxScrollAmount) {
      this.overflowValue = 'right';
    } else {
      this.overflowValue = 'both';
    }
  }

  get getScrollAmount(): number {
    if (this.scrollAmount === 'auto') {
      return (
        this.widgetsContent.nativeElement.childNodes[0].offsetWidth +
        this.mainStyles.elementsGap
      );
    } else if (this.scrollAmount === 'full') {
      return this.widgetsContent.nativeElement.offsetWidth;
    }
    return this.scrollAmount;
  }

  checkOverflow() {
    if (!this.widgetsContent) return;

    const { nativeElement: element } = this.widgetsContent;
    const { firstAndLastElementGap, reverseDirection } = this.mainStyles;

    // Check for overflow
    this.hasOverflow =
      element.offsetHeight < element.scrollHeight ||
      element.offsetWidth < element.scrollWidth;

    // Set margins for first and last elements
    const firstChildStyle = element.firstChild.style;
    const lastChildStyle = element.lastElementChild.style;

    const primaryMargin = `${firstAndLastElementGap}px`;
    const secondaryMargin = '0px';

    if (reverseDirection) {
      firstChildStyle['margin-right'] = primaryMargin;
      lastChildStyle['margin-left'] = primaryMargin;
      firstChildStyle['margin-left'] = secondaryMargin;
      lastChildStyle['margin-right'] = secondaryMargin;
    } else {
      firstChildStyle['margin-left'] = primaryMargin;
      lastChildStyle['margin-right'] = primaryMargin;
      firstChildStyle['margin-right'] = secondaryMargin;
      lastChildStyle['margin-left'] = secondaryMargin;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkOverflow();
  }
}
