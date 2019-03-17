import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityCheckerComponent } from './quantity-checker.component';

describe('QuantityCheckerComponent', () => {
  let component: QuantityCheckerComponent;
  let fixture: ComponentFixture<QuantityCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
