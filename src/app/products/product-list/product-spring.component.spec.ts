import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpringComponent } from './product-spring.component';

describe('ProductSpringComponent', () => {
  let component: ProductSpringComponent;
  let fixture: ComponentFixture<ProductSpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
