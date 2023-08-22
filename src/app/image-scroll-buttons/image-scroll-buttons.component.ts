import { Component, HostBinding, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IScrollBtnStyles,
  IscrollBtnDefault,
} from 'src/shared/interface/button.interface';

@Component({
  selector: 'app-image-scroll-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-scroll-buttons.component.html',
  styleUrls: ['./image-scroll-buttons.component.scss'],
})
export class ImageScrollButtonsComponent {
  @Input({ required: true }) widgetsContent!: HTMLDivElement;
  @Input({ required: true }) scrollAmount = 0;

  @Input({ required: true }) buttonDisplay: 'left' | 'both' | 'right' = 'left';
  @Input({ required: true }) position: 'center' | 'top right' = 'center';

  @Input() scrollButtonTemplate!: TemplateRef<void>;

  // button styles
  @Input() btnStyles: IScrollBtnStyles = IscrollBtnDefault;

  @HostBinding('style.--default-btn-bg-color') get btnBgColor() {
    return this.btnStyles.btnBgColor;
  }
  @HostBinding('style.--default-arrow-color') get arrowColor() {
    return this.btnStyles.arrowColor;
  }
  @HostBinding('style.--default-btn-scale') get btnScale() {
    return this.btnStyles.btnScale;
  }

  scroll(direction: 1 | -1) {
    this.widgetsContent.scrollLeft += this.scrollAmount * direction;
  }
}
