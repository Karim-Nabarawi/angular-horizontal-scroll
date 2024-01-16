import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularHorizontalScroll,
  ButtonStyles,
  ContainerStyles,
} from 'angular-horizontal-scroll';
import { generateRandomElement } from 'src/shared/utils/random';
import { FormsModule } from '@angular/forms';
import { ExampleHolderComponent } from 'src/app/example-holder/example-holder.component';
import { MainControlsComponent } from './components/main-controls/main-controls.component';
import {
  ButtonsControls,
  ContainerControls,
  ControlProps,
  MainControls,
} from './interfaces/controls.interface';
import { ContainerControlsComponent } from './components/container-controls/container-controls.component';
import { ButtonsControlsComponent } from './components/buttons-controls/buttons-controls.component';

@Component({
  selector: 'app-api-playground',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AngularHorizontalScroll,
    ExampleHolderComponent,
    MainControlsComponent,
    ContainerControlsComponent,
    ButtonsControlsComponent,
  ],
  templateUrl: './api-playground.component.html',
  styleUrls: ['./api-playground.component.scss'],
})
export class ApiPlaygroundComponent {
  controls: ControlProps = {
    mainControls: {
      scrollButtonPosition: 'top right',
      scrollAmount: 'auto',
      showScrollbar: false,
      reverseDirection: false,
    },

    containerControls: {
      containerGap: 0,
      elementsGap: 16,
      firstAndLastElementGap: 16,
      reverseDirection: false,
      containerInlineStyle: '',
    },

    buttonsControls: {
      btnBgColor: '#0000004d',
      arrowColor: '#fff',
      btnSize: 16,
      buttonInlineStyle: '',
    },
  };

  exampleData = generateRandomElement(50);

  get containerStyles(): Partial<ContainerStyles> {
    return {
      containerGap: this.controls.containerControls.containerGap,
      elementsGap: this.controls.containerControls.elementsGap,
      firstAndLastElementGap:
        this.controls.containerControls.firstAndLastElementGap,
      reverseDirection: this.controls.containerControls.reverseDirection,
      inlineStyle: this.controls.containerControls.containerInlineStyle,
    };
  }

  get buttonStyles(): Partial<ButtonStyles> {
    return {
      btnBgColor: this.controls.buttonsControls.btnBgColor,
      arrowColor: this.controls.buttonsControls.arrowColor,
      btnSize: this.controls.buttonsControls.btnSize,
      inlineStyle: this.controls.buttonsControls.buttonInlineStyle,
    };
  }

  setMainControls(mainControls: MainControls) {
    this.controls.mainControls = mainControls;
    this.code = this.setCode();
  }

  setContainerControls(containerControls: ContainerControls) {
    this.controls.containerControls = containerControls;
    this.code = this.setCode();
  }

  setButtonsControls(buttonsControls: ButtonsControls) {
    this.controls.buttonsControls = buttonsControls;
    this.code = this.setCode();
  }

  setCode() {
    const containerInlineStyle =
      this.controls.containerControls.containerInlineStyle.replace(/\n/g, ' ');
    const buttonInlineStyle =
      this.controls.buttonsControls.buttonInlineStyle.replace(/\n/g, ' ');
    return `
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import {
      AngularHorizontalScroll,
      ButtonStyles,
      ContainerStyles,
    } from 'angular-horizontal-scroll';
    
    @Component({
      selector: 'app-example',
      standalone: true,
      imports: [CommonModule, AngularHorizontalScroll],
      template: \`
        <horizontal-scroll
          headerTitleTemplate="API Playground"
          [scrollAmount]="scrollAmount"
          [scrollButtonPosition]="scrollButtonPosition"
          [showScrollbar]="showScrollbar"
          [containerStyles]="containerStyles"
          [buttonStyles]="buttonStyles"
        >
          @for (data of exampleData; track $index) {
          <div class="box">
            <span
              class="emoji"
              [style.--hover-color]="data.color"
              [style.--hover-rotate]="data.rotate"
              >{{ data.emoji }}</span
            >
          </div>
          }
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
    
      scrollButtonPosition: 'center' | 'top right' = '${this.controls.mainControls.scrollButtonPosition}';
      scrollAmount: number | 'auto' | 'full' = '${this.controls.mainControls.scrollAmount}';
      showScrollbar = ${this.controls.mainControls.showScrollbar};
    
      containerGap = ${this.controls.containerControls.containerGap};
      elementsGap = ${this.controls.containerControls.elementsGap};
      firstAndLastElementGap = ${this.controls.containerControls.firstAndLastElementGap};
      reverseDirection = ${this.controls.mainControls.reverseDirection};
      containerInlineStyle = '${containerInlineStyle}';
    
      btnBgColor = '${this.controls.buttonsControls.btnBgColor}';
      arrowColor = '${this.controls.buttonsControls.arrowColor}';
      btnSize = ${this.controls.buttonsControls.btnSize};
      buttonInlineStyle = '${buttonInlineStyle}';
    
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

  code = this.setCode();
}
