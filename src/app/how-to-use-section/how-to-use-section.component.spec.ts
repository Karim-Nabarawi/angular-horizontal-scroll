import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseSectionComponent } from './how-to-use-section.component';

describe('HowToUseSectionComponent', () => {
  let component: HowToUseSectionComponent;
  let fixture: ComponentFixture<HowToUseSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HowToUseSectionComponent]
    });
    fixture = TestBed.createComponent(HowToUseSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
