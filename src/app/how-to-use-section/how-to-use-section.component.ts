import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-how-to-use-section',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './how-to-use-section.component.html',
  styleUrls: ['./how-to-use-section.component.scss'],
})
export class HowToUseSectionComponent {
  code1 = 'npm install angular-horizontal-srcoll';
  code2 =
    'import { AngularHorizontalScrollModule } from "angular-horizontal-scroll";';

  code3 =
    'import { AngularHorizontalScroll } from "angular-horizontal-scroll";';
  code4 = `<horizontal-scroll>
  <!-- Your content here -->
</horizontal-scroll>`;
}
