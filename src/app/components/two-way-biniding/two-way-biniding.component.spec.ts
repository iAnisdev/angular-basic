import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBinidingComponent } from './two-way-biniding.component';

describe('TwoWayBinidingComponent', () => {
  let component: TwoWayBinidingComponent;
  let fixture: ComponentFixture<TwoWayBinidingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBinidingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoWayBinidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
