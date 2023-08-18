import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImageScrollComponent } from './image-scroll/image-scroll.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImageScrollComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
