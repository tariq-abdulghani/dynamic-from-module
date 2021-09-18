import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TahDynamicFormComponent } from './tah-dynamic-form.component';

describe('TahDynamicFormComponent', () => {
  let component: TahDynamicFormComponent;
  let fixture: ComponentFixture<TahDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TahDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TahDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
