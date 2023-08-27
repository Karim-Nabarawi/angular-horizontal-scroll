import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularHorizontalScrollComponent,
  ButtonStyles,
  ContainerStyles,
} from 'angular-horizontal-scroll';
import { generateRandomElement } from 'src/shared/utils/random';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-styles-exmaple',
  standalone: true,
  imports: [CommonModule, FormsModule, AngularHorizontalScrollComponent],
  templateUrl: './custom-styles-exmaple.component.html',
  styleUrls: ['./custom-styles-exmaple.component.scss'],
})
export class CustomStylesExmapleComponent {
  scrollButtonPosition: 'center' | 'top right' = 'top right';
  scrollAmount: number | 'auto' | 'full' = 'auto';
  scrollAmountSelector: 'number' | 'auto' | 'full' = 'auto';
  showScrollbar = false;

  containerGap = 0;
  elementsGap = 16;
  firstAndLastElementGap = 16;
  containerInlineStyle = '';
  buttonInlineStyle = '';

  btnBgColor = '#0000004d';
  arrowColor = '#fff';
  btnSize = 16;

  randomEmojis = generateRandomElement(50);

  get containerStyles(): Partial<ContainerStyles> {
    return {
      containerGap: this.containerGap,
      elementsGap: this.elementsGap,
      firstAndLastElementGap: this.firstAndLastElementGap,
      inlineStyle: this.containerInlineStyle,
    };
  }

  get buttonStyles(): Partial<ButtonStyles> {
    return {
      btnBgColor: this.btnBgColor,
      arrowColor: this.arrowColor,
      btnSize: this.btnSize,
      inlineStyle: this.buttonInlineStyle,
    };
  }

  updateScrollAmount(scrollAmount: number | 'auto' | 'full') {
    this.scrollAmount = scrollAmount;
  }

  rotate(deg: number) {
    return deg + 'deg';
  }
}
