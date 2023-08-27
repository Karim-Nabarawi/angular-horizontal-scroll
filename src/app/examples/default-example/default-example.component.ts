import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHorizontalScrollComponent } from 'angular-horizontal-scroll';
import { ExampleHolderComponent } from '../../example-holder/example-holder.component';
import { generateRandomElement } from 'src/shared/utils/random';

@Component({
  selector: 'app-default-example',
  standalone: true,
  imports: [
    CommonModule,
    AngularHorizontalScrollComponent,
    ExampleHolderComponent,
  ],
  template: `
    <app-example-holder explanation="Default behaviour">
      <horizontal-scroll headerTitleTemplate="Arrow top with scrollbar">
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
export class DefaultExampleComponent {
  exampleData = generateRandomElement();
}
