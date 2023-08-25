import { Component } from '@angular/core';
import { IMainStyles } from 'angular-horizontal-scroll';
import { generateRandomElement } from 'src/shared/utils/random';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'horizontal-scroll-example';

  example2Theme: Partial<IMainStyles> = {
    btnSize: 18,
    btnBgColor: 'rgb(17, 157, 200)',
    elementsGap: 25,
    firstAndLastElementGap: 16,
  };

  example3Theme: Partial<IMainStyles> = {
    elementsGap: 50,
    firstAndLastElementGap: 16,
    containerGap: 0,
  };

  example4Theme: Partial<IMainStyles> = {
    elementsGap: 100,
    firstAndLastElementGap: 16,
  };

  example1 = generateRandomElement();
  example2 = generateRandomElement(40);
  example3 = generateRandomElement();
  example4 = generateRandomElement();
  example5 = generateRandomElement();

  rotate(deg: number) {
    return deg + 'deg';
  }

  get today() {
    return new Date();
  }
}
