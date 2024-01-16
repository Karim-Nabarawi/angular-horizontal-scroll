import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

type InputType = 'text' | 'number';
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent<T> {
  @Input({ required: true }) label: string = '';
  @Input() type: InputType = 'text';
  @Input({ required: true }) value!: T;
  @Output() valueChange: EventEmitter<T> = new EventEmitter<T>();

  onChange() {
    this.valueChange.emit(this.value);
  }
}
