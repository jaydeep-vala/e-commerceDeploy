import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductuctByDateComponent } from './view-productuct-by-date.component';

describe('ViewProductuctByDateComponent', () => {
  let component: ViewProductuctByDateComponent;
  let fixture: ComponentFixture<ViewProductuctByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductuctByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductuctByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
