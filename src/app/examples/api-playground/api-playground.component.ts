import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularHorizontalScrollComponent,
  ButtonStyles,
  ContainerStyles,
} from 'angular-horizontal-scroll';
import { generateRandomElement } from 'src/shared/utils/random';
import { FormsModule } from '@angular/forms';
import { ExampleHolderComponent } from 'src/app/example-holder/example-holder.component';

@Component({
  selector: 'app-api-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AngularHorizontalScrollComponent,
    ExampleHolderComponent,
  ],
  templateUrl: './api-playground.component.html',
  styleUrls: ['./api-playground.component.scss'],
})
export class ApiPlaygroundComponent {
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
