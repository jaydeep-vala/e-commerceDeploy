import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductuctByCategoryComponent } from './view-productuct-by-category.component';

describe('ViewProductuctByCategoryComponent', () => {
  let component: ViewProductuctByCategoryComponent;
  let fixture: ComponentFixture<ViewProductuctByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductuctByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductuctByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
