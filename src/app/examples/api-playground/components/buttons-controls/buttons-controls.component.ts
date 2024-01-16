import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonsControls } from '../../interfaces/controls.interface';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-buttons-controls',
  standalone: true,
  imports: [FormsModule, InputComponent],
  templateUrl: './buttons-controls.component.html',
  styleUrl: './buttons-controls.component.scss',
})
export class ButtonsControlsComponent {
  @Input() controls: ButtonsControls = {
    btnBgColor: '#0000004d',
    arrowColor: '#fff',
    btnSize: 16,
    buttonInlineStyle: '',
  };

  @Output() controlsChange: EventEmitter<ButtonsControls> =
    new EventEmitter<ButtonsControls>();

  emitControls() {
    this.controlsChange.emit(this.controls);
  }
}
