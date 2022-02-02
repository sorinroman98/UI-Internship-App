import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpringDetailsComponent } from './product-spring-details.component';

describe('ProductSpringDetailsComponent', () => {
  let component: ProductSpringDetailsComponent;
  let fixture: ComponentFixture<ProductSpringDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSpringDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSpringDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
