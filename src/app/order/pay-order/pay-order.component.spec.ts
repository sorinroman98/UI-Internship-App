import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayOrderComponent } from './pay-order.component';

describe('PayOrderComponent', () => {
  let component: PayOrderComponent;
  let fixture: ComponentFixture<PayOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
