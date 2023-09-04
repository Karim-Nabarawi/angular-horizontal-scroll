import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHorizontalScroll } from './angular-horizontal-scroll.component';

describe('AngularHorizontalScroll', () => {
  let component: AngularHorizontalScroll;
  let fixture: ComponentFixture<AngularHorizontalScroll>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularHorizontalScroll],
    });
    fixture = TestBed.createComponent(AngularHorizontalScroll);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
