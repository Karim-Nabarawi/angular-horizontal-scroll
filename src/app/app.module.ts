import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularHorizontalScrollComponent } from 'angular-horizontal-scroll';
import { ExampleHolderComponent } from './example-holder/example-holder.component';
import {
  ApiPlaygroundComponent,
  DefaultExampleComponent,
  ButtonPositionExampleComponent,
  ScrollbarExampleComponent,
  CustomButtonExampleComponent,
  CustomHeaderExampleComponent,
  CustomStylesExampleComponent,
} from './examples';
import { HowToUseSectionComponent } from './how-to-use-section/how-to-use-section.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularHorizontalScrollComponent,
    ApiPlaygroundComponent,
    ExampleHolderComponent,
    DefaultExampleComponent,
    ButtonPositionExampleComponent,
    ScrollbarExampleComponent,
    CustomButtonExampleComponent,
    CustomHeaderExampleComponent,
    CustomStylesExampleComponent,
    HowToUseSectionComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
