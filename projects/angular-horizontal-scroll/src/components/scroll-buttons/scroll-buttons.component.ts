import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ButtonStyles,
  ButtonStylesDefault,
} from '../../shared/interface/button.interface';

@Component({
  selector: 'app-image-scroll-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-buttons.component.html',
  styleUrls: ['./scroll-buttons.component.scss'],
})
export class ImageScrollButtonsComponent {
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

  @Input({ required: true }) widgetsContent!: HTMLDivElement;
  @Input({ required: true }) scrollAmount = 0;

  @Input({ required: true }) buttonDisplay: 'left' | 'both' | 'right' = 'left';
  @Input({ required: true }) position: 'center' | 'top right' = 'center';
  @Input({ required: true }) reverseDirection: boolean = false;

  @Input() scrollButtonTemplate!: TemplateRef<void>;

  // button styles
  @Input() btnStyles: ButtonStyles = ButtonStylesDefault;

  @HostBinding('style.--default-btn-bg-color') get btnBgColor() {
    return this.btnStyles.btnBgColor;
  }
  @HostBinding('style.--default-arrow-color') get arrowColor() {
    return this.btnStyles.arrowColor;
  }
  @HostBinding('style.--default-btn-size') get btnSize() {
    return `${this.btnStyles.btnSize}px`;
  }

  scroll(direction: 1 | -1) {
    if (direction === 1) {
      this.onRightBtnClick.emit();
    } else {
      this.onLeftBtnClick.emit();
    }
    this.widgetsContent.scrollLeft += this.scrollAmount * direction;
  }

  shouldHideBtn(btnType: 'right' | 'left') {
    if (this.buttonDisplay === 'both') {
      return false;
    }
    const check = btnType === this.buttonDisplay;
    return (
      (check && !this.reverseDirection) || (!check && this.reverseDirection)
    );
  }
}
