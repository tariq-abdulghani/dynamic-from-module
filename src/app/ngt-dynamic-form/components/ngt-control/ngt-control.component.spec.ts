import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtControlComponent } from './ngt-control.component';

describe('NgtControlComponent', () => {
  let component: NgtControlComponent;
  let fixture: ComponentFixture<NgtControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgtControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
