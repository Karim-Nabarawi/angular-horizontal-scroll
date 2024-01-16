import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ContainerControls } from '../../interfaces/controls.interface';

@Component({
  selector: 'app-container-controls',
  standalone: true,
  imports: [FormsModule, InputComponent],
  templateUrl: './container-controls.component.html',
  styleUrl: './container-controls.component.scss',
})
export class ContainerControlsComponent {
  @Input() controls = {
    containerGap: 0,
    elementsGap: 16,
    firstAndLastElementGap: 16,
    reverseDirection: false,
    containerInlineStyle: '',
  };
  @Output() controlsChange: EventEmitter<ContainerControls> =
    new EventEmitter<ContainerControls>();

  emitControls() {
    this.controlsChange.emit(this.controls);
  }
}
