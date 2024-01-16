import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MainControls } from '../../interfaces/controls.interface';

@Component({
  selector: 'app-main-controls',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main-controls.component.html',
  styleUrl: './main-controls.component.scss',
})
export class MainControlsComponent {
  scrollButtonPosition: 'center' | 'top right' = 'top right';
  scrollAmount: number | 'auto' | 'full' = 'auto';
  scrollAmountSelector: 'number' | 'auto' | 'full' = 'auto';
  showScrollbar = false;
  reverseDirection = false;

  @Output() mainControls: EventEmitter<MainControls> =
    new EventEmitter<MainControls>();

  updateScrollAmount(scrollAmount: number | 'auto' | 'full') {
    this.scrollAmount = scrollAmount;
  }

  inputChange() {
    this.mainControls.emit({
      scrollButtonPosition: this.scrollButtonPosition,
      scrollAmount: this.scrollAmount,
      showScrollbar: this.showScrollbar,
      reverseDirection: this.reverseDirection,
    });
  }
}
