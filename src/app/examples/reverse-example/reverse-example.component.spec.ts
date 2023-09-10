import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReverseExampleComponent } from './reverse-example.component';

describe('ReverseExampleComponent', () => {
  let component: ReverseExampleComponent;
  let fixture: ComponentFixture<ReverseExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReverseExampleComponent]
    });
    fixture = TestBed.createComponent(ReverseExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
