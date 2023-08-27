import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import hljs from 'highlight.js';

@Directive({
  selector: '[codeHighlight]',
  standalone: true,
})
export class CodeHighlightDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    console.log(this.el.nativeElement);
    hljs.highlightBlock(this.el.nativeElement);
  }
}
