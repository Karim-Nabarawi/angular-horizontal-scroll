import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollbarExampleComponent } from './scrollbar-example.component';

describe('ScrollbarExampleComponent', () => {
  let component: ScrollbarExampleComponent;
  let fixture: ComponentFixture<ScrollbarExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ScrollbarExampleComponent]
    });
    fixture = TestBed.createComponent(ScrollbarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
