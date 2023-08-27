import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularHorizontalScrollComponent } from 'angular-horizontal-scroll';
import { ExampleHolderComponent } from '../../example-holder/example-holder.component';
import { generateRandomElement } from 'src/shared/utils/random';

@Component({
  selector: 'app-custom-header-example',
  standalone: true,
  imports: [
    CommonModule,
    AngularHorizontalScrollComponent,
    ExampleHolderComponent,
  ],
  template: `
    <app-example-holder explanation="Custom header template can be used">
      <horizontal-scroll
        headerTitleTemplate="Arrow Center"
        scrollAmount="full"
        [headerTitleTemplate]="titleTemplateOutlet"
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

    <ng-template #titleTemplateOutlet>
      <div style="display: flex; gap: 10px; align-items: center">
        <h1 style="color: #2265e3">Custom header</h1>
        <h3 class="date">{{ today | date : 'yyyy-MM-dd' }}</h3>
      </div>
    </ng-template>
  `,
  styles: [
    `
      .date {
        background: #fe921f;
        color: #ffffff;
        display: inline-block;
        font-size: 12px;
        font-weight: bold;
        line-height: 12px;
        letter-spacing: 1px;
        padding: 10px 15px 8px;
        text-transform: uppercase;
        border-radius: 5px;
      }
    `,
  ],
})
export class CustomHeaderExampleComponent {
  exampleData = generateRandomElement();

  get today() {
    return new Date();
  }
}
