import { Component } from '@angular/core';
import { ApiPlaygroundComponent } from './examples/api-playground/api-playground.component';
import { CustomStylesExampleComponent } from './examples/custom-styles-example/custom-styles-example.component';
import { CustomHeaderExampleComponent } from './examples/custom-header-example/custom-header-example.component';
import { CustomButtonExampleComponent } from './examples/custom-button-example/custom-button-example.component';
import { ScrollbarExampleComponent } from './examples/scrollbar-example/scrollbar-example.component';
import { ButtonPositionExampleComponent } from './examples/button-position-example/button-position-example.component';
import { DefaultExampleComponent } from './examples/default-example/default-example.component';
import { HowToUseSectionComponent } from './how-to-use-section/how-to-use-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    HowToUseSectionComponent,
    DefaultExampleComponent,
    ButtonPositionExampleComponent,
    ScrollbarExampleComponent,
    CustomButtonExampleComponent,
    CustomHeaderExampleComponent,
    CustomStylesExampleComponent,
    ApiPlaygroundComponent,
  ],
})
export class AppComponent {
  title = 'Angular Horizontal Scroll';
}
