import { Component } from '@angular/core';
import { ButtonStyles, ContainerStyles } from 'angular-horizontal-scroll';
import { generateRandomElement } from 'src/shared/utils/random';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular Horizontal Scroll';
}
