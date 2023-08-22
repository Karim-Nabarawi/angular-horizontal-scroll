import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularVerticalScrollComponent } from './angular-vertical-scroll.component';

describe('AngularVerticalScrollComponent', () => {
  let component: AngularVerticalScrollComponent;
  let fixture: ComponentFixture<AngularVerticalScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularVerticalScrollComponent]
    });
    fixture = TestBed.createComponent(AngularVerticalScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
