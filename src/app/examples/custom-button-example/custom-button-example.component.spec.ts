import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonExampleComponent } from './custom-button-example.component';

describe('CustomButtonExampleComponent', () => {
  let component: CustomButtonExampleComponent;
  let fixture: ComponentFixture<CustomButtonExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomButtonExampleComponent]
    });
    fixture = TestBed.createComponent(CustomButtonExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
