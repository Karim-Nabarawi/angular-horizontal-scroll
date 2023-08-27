import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleHolderComponent } from '../../example-holder/example-holder.component';
import { generateRandomElement } from 'src/shared/utils/random';
import { AngularHorizontalScrollComponent } from 'angular-horizontal-scroll';

@Component({
  selector: 'app-button-position-example',
  standalone: true,
  imports: [
    CommonModule,
    AngularHorizontalScrollComponent,
    ExampleHolderComponent,
  ],
  template: `
    <app-example-holder
      explanation="Buttons positions can be adjusted to top right"
    >
      <!-- Example 2 Arrow center with different button color -->
      <horizontal-scroll
        headerTitleTemplate="Buttons top right"
        [scrollButtonPosition]="'top right'"
      >
        <ng-template ngFor let-data [ngForOf]="btnPositionData">
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
export class ButtonPositionExampleComponent {
  btnPositionData = generateRandomElement();
}
