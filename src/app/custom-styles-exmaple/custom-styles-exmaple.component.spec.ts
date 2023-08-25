import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStylesExmapleComponent } from './custom-styles-exmaple.component';

describe('CustomStylesExmapleComponent', () => {
  let component: CustomStylesExmapleComponent;
  let fixture: ComponentFixture<CustomStylesExmapleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomStylesExmapleComponent]
    });
    fixture = TestBed.createComponent(CustomStylesExmapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
