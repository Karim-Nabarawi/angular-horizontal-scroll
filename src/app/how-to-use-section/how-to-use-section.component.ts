import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import hljs from 'highlight.js';
import { CodeHighlightDirective } from 'src/shared/directives/code-highlight.directive';

@Component({
  selector: 'app-how-to-use-section',
  standalone: true,
  imports: [CommonModule, CodeHighlightDirective],
  template: `
    <h2>How to use</h2>
    <p>- Install the package using npm</p>

    <pre>
  <code>
    npm install angular-horizontal-srcoll
  </code>
</pre>

    <p>
      Import the <code>AngularHorizontalScrollModule</code> or
      <code>AngularHorizontalScrollComponent</code> in your module or standalone
      component:
    </p>
    <p>Module</p>
    <pre>
  <code codeHighlight>{{code2}} </code>
</pre>
    <p>Standalone</p>
    <pre>
  <code>import </code>
</pre>

    <p>Include your content within the <code>horizontal-scroll</code> tags:</p>
  `,
  styleUrls: ['./how-to-use-section.component.scss'],
})
export class HowToUseSectionComponent {
  code1 = 'npm install angular-horizontal-srcoll';
  code2 = hljs.highlight(
    'import { AngularHorizontalScrollModule } from "angular-horizontal-scroll";',
    { language: 'typescript' }
  ).value;
  code3 =
    'import { AngularHorizontalScrollComponent } from "angular-horizontal-scroll";';
  code4 = '';
}
