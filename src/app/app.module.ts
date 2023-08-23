import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularVerticalScrollComponent } from 'angular-vertical-scroll';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularVerticalScrollComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
