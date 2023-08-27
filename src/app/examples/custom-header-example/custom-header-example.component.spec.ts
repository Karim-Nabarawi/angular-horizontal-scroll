import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeaderExampleComponent } from './custom-header-example.component';

describe('CustomHeaderExampleComponent', () => {
  let component: CustomHeaderExampleComponent;
  let fixture: ComponentFixture<CustomHeaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CustomHeaderExampleComponent]
    });
    fixture = TestBed.createComponent(CustomHeaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
