import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerControlsComponent } from './container-controls.component';

describe('ContainerControlsComponent', () => {
  let component: ContainerControlsComponent;
  let fixture: ComponentFixture<ContainerControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerControlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
