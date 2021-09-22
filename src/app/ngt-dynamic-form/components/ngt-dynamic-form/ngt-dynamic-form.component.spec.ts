import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtDynamicFormComponent } from './ngt-dynamic-form.component';

describe('NgtDynamicFormComponent', () => {
  let component: NgtDynamicFormComponent;
  let fixture: ComponentFixture<NgtDynamicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtDynamicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
