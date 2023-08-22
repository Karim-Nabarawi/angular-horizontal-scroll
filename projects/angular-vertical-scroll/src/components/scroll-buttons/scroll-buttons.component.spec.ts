import { IScrollBtnStyles } from '../../shared/interface/button.interface';
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

  it('should return correct button styles', () => {
    const expectedStyles: IScrollBtnStyles = {
      btnBgColor: 'rgba(0, 0, 0, 0.3)',
      arrowColor: 'rgb(255, 255, 255)',
      btnScale: 1,
    };

    expect(component.btnBgColor).toEqual(expectedStyles.btnBgColor);
    expect(component.arrowColor).toEqual(expectedStyles.arrowColor);
    expect(component.btnScale).toEqual(expectedStyles.btnScale);
  });
});
