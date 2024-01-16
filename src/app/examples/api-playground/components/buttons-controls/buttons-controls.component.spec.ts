import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsControlsComponent } from './buttons-controls.component';

describe('ButtonsControlsComponent', () => {
  let component: ButtonsControlsComponent;
  let fixture: ComponentFixture<ButtonsControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonsControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
