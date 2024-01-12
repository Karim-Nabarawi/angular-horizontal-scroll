import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularHorizontalScroll,
  ScrollTheme,
} from 'angular-horizontal-scroll';
import { ExampleHolderComponent } from '../../example-holder/example-holder.component';
import { generateRandomElement } from 'src/shared/utils/random';

@Component({
  selector: 'app-custom-styles-example',
  standalone: true,
  imports: [CommonModule, AngularHorizontalScroll, ExampleHolderComponent],
  template: `
    <app-example-holder
      explanation="Container and button styles can be adjusted"
      [code]="code"
    >
      <horizontal-scroll headerTitleTemplate="Custom styles" [theme]="theme">
        <ng-template ngFor let-data [ngForOf]="exampleData">
          <div class="box">
            <span
              class="emoji"
              [style.--hover-color]="data.color"
              [style.--hover-rotate]="data.rotate"
              >{{ data.emoji }}</span
            >
          </div>
        </ng-template>
      </horizontal-scroll>
    </app-example-holder>
  `,
})
export class CustomStylesExampleComponent {
  exampleData = generateRandomElement();

  theme: ScrollTheme = {
    container: {
      elementsGap: 50,
      containerGap: 20,
      firstAndLastElementGap: 16,
    },
    button: {
      btnSize: 18,
      btnBgColor: 'rgb(17, 157, 200)',
    },
  };

  code = `
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularHorizontalScroll,
  ScrollTheme
} from 'angular-horizontal-scroll';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CommonModule, AngularHorizontalScroll],
  template: \`
    <horizontal-scroll headerTitleTemplate="Custom styles" [theme]="theme">
      <ng-template ngFor let-data [ngForOf]="exampleData">
        <div class="box" >
          <span
            class="emoji"
            [style.--hover-color]="data.color"
            [style.--hover-rotate]="data.rotate"
            >{{ data.emoji }}</span
          >
        </div>
      </ng-template>
    </horizontal-scroll>
  \`,
  styles: [
    \`
      .emoji {
        font-size: 20px;
        transform: rotate(0deg);
      }

      .box {
        margin: 10px 0px;
        flex: 0 0 120px;
        width: 120px;
        height: 100px;
        transition: 0.4s;
        border-radius: 10px;
        background-color: #f6f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #6c6c6c;
        transition: 0.3s;
      }

      .box:hover {
        transform: scale(1.1);
        background: #ffffff;
        z-index: 2;
        box-shadow: 0 0 10px 2px #e6e6e6;
        cursor: pointer;
      }

      .box:hover .emoji {
        color: var(--hover-color);
        font-size: 25px;
        transform: rotate(var(--hover-rotate));
      }
    \`,
  ],
})
export class ExampleComponent {
  exampleData = this.generateRandomElement();

  theme: ScrollTheme = {
    container: {
      elementsGap: 50,
      containerGap: 20,
      firstAndLastElementGap: 16,
    },
    button: {
      btnSize: 18,
      btnBgColor: 'rgb(17, 157, 200)',
    },
  };

  generateRandomElement(arraySize = 20) {
    const emojis = [
      '(っ＾▿＾)',
      '(>‿◠)✌',
      '(╥﹏╥)',
      'ಥ_ಥ',
      '(≖_≖ )',
      "(ง︡'-'︠)ง",
      '💪(◡̀_◡́҂)',
    ];
    const randomEmojis = [];
    for (let i = 0; i < arraySize; i++) {
      const randomIndex = Math.floor(Math.random() * emojis.length);
      randomEmojis.push({
        emoji: emojis[randomIndex],
        color: this.generateRandomColor(),
        rotate: this.generateRandomNumber() + 'deg',
      });
    }
    return randomEmojis;
  }

  generateRandomNumber(min = -20, max = 20) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}
`;
}
