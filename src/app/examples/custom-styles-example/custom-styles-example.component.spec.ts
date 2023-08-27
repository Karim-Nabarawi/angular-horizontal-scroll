import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStylesExampleComponent } from './custom-styles-example.component';

describe('CustomStylesExampleComponent', () => {
  let component: CustomStylesExampleComponent;
  let fixture: ComponentFixture<CustomStylesExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomStylesExampleComponent]
    });
    fixture = TestBed.createComponent(CustomStylesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
