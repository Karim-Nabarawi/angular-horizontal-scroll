import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IScrollBtnStyles,
  IScrollBtnStylesDefault,
} from '../../shared/interface/button.interface';

@Component({
  selector: 'app-image-scroll-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-buttons.component.html',
  styleUrls: ['./scroll-buttons.component.scss'],
})
export class ImageScrollButtonsComponent {
  @Input({ required: true }) widgetsContent!: HTMLDivElement;
  @Input({ required: true }) scrollAmount = 0;

  @Input({ required: true }) buttonDisplay: 'left' | 'both' | 'right' = 'left';
  @Input({ required: true }) position: 'center' | 'top right' = 'center';

  @Input() scrollButtonTemplate!: TemplateRef<void>;

  // button styles
  @Input() btnStyles: IScrollBtnStyles = IScrollBtnStylesDefault;

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
    console.log(direction);
    this.widgetsContent.scrollLeft += this.scrollAmount * direction;
  }
}
