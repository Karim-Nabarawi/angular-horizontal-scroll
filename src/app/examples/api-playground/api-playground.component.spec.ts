import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPlaygroundComponent } from './api-playground.component';

describe('ApiPlaygroundComponent', () => {
  let component: ApiPlaygroundComponent;
  let fixture: ComponentFixture<ApiPlaygroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ApiPlaygroundComponent],
    });
    fixture = TestBed.createComponent(ApiPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
