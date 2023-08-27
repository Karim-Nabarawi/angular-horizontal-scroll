import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultExampleComponent } from './default-example.component';

describe('DefaultExampleComponent', () => {
  let component: DefaultExampleComponent;
  let fixture: ComponentFixture<DefaultExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DefaultExampleComponent]
    });
    fixture = TestBed.createComponent(DefaultExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
