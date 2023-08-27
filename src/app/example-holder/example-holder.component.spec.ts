import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleHolderComponent } from './example-holder.component';

describe('ExampleHolderComponent', () => {
  let component: ExampleHolderComponent;
  let fixture: ComponentFixture<ExampleHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ExampleHolderComponent]
    });
    fixture = TestBed.createComponent(ExampleHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
