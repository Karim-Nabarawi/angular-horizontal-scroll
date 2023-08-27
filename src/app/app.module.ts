import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularHorizontalScrollComponent } from 'angular-horizontal-scroll';
import { CustomStylesExmapleComponent } from './custom-styles-exmaple/custom-styles-exmaple.component';
import { ExampleHolderComponent } from './example-holder/example-holder.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AngularHorizontalScrollComponent,
    CustomStylesExmapleComponent,
    ExampleHolderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
