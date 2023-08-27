import { Component } from '@angular/core';
import { ButtonStyles, ContainerStyles } from 'angular-horizontal-scroll';
import { generateRandomElement } from 'src/shared/utils/random';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'horizontal-scroll-example';

  customContainerStyles: Partial<ContainerStyles> = {
    elementsGap: 50,
    containerGap: 20,
    firstAndLastElementGap: 16,
  };

  customBtnStyles: Partial<ButtonStyles> = {
    btnSize: 18,
    btnBgColor: 'rgb(17, 157, 200)',
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
