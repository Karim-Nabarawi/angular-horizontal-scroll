import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPositionExampleComponent } from './button-position-example.component';

describe('ButtonPositionExampleComponent', () => {
  let component: ButtonPositionExampleComponent;
  let fixture: ComponentFixture<ButtonPositionExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ButtonPositionExampleComponent]
    });
    fixture = TestBed.createComponent(ButtonPositionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
