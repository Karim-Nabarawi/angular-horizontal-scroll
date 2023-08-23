import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularVerticalScrollModule } from 'angular-vertical-scroll';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularVerticalScrollModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
