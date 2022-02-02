import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductSpringComponent } from './add-product-spring.component';

describe('AddProductSpringComponent', () => {
  let component: AddProductSpringComponent;
  let fixture: ComponentFixture<AddProductSpringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductSpringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
