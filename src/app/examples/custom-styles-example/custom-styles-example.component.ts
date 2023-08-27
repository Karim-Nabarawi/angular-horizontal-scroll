import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AngularHorizontalScrollComponent,
  ButtonStyles,
  ContainerStyles,
} from 'angular-horizontal-scroll';
import { ExampleHolderComponent } from '../../example-holder/example-holder.component';
import { generateRandomElement } from 'src/shared/utils/random';

@Component({
  selector: 'app-custom-styles-example',
  standalone: true,
  imports: [
    CommonModule,
    AngularHorizontalScrollComponent,
    ExampleHolderComponent,
  ],
  template: `
    <app-example-holder
      explanation="Container and button styles can be adjusted"
    >
      <horizontal-scroll
        headerTitleTemplate="Custom styles"
        [buttonStyles]="customBtnStyles"
        [containerStyles]="customContainerStyles"
      >
        <ng-template ngFor let-data [ngForOf]="exampleData">
          <div class="box" tabindex="0">
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

  customContainerStyles: Partial<ContainerStyles> = {
    elementsGap: 50,
    containerGap: 20,
    firstAndLastElementGap: 16,
  };

  customBtnStyles: Partial<ButtonStyles> = {
    btnSize: 18,
    btnBgColor: 'rgb(17, 157, 200)',
  };
}
