import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageScrollButtonsComponent } from './image-scroll-buttons.component';

describe('ImageScrollButtonsComponent', () => {
  let component: ImageScrollButtonsComponent;
  let fixture: ComponentFixture<ImageScrollButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageScrollButtonsComponent]
    });
    fixture = TestBed.createComponent(ImageScrollButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
