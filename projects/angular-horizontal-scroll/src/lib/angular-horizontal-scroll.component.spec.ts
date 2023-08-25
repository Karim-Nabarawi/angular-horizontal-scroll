import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularHorizontalScrollComponent } from './angular-horizontal-scroll.component';

describe('AngularhorizontalScrollComponent', () => {
  let component: AngularHorizontalScrollComponent;
  let fixture: ComponentFixture<AngularHorizontalScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularHorizontalScrollComponent],
    });
    fixture = TestBed.createComponent(AngularHorizontalScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
