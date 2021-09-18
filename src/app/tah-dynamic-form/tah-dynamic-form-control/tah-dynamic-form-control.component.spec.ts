import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahDynamicFormControlComponent } from './tah-dynamic-form-control.component';

describe('TahDynamicFormControlComponent', () => {
  let component: TahDynamicFormControlComponent;
  let fixture: ComponentFixture<TahDynamicFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TahDynamicFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TahDynamicFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
