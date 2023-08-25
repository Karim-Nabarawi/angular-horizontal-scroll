import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageScrollButtonsComponent } from './scroll-buttons.component';

describe('ImageScrollButtonsComponent', () => {
  let component: ImageScrollButtonsComponent;
  let fixture: ComponentFixture<ImageScrollButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageScrollButtonsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageScrollButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
