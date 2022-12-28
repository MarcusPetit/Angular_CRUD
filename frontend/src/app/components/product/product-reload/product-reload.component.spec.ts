import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReloadComponent } from './product-reload.component';

describe('ProductReloadComponent', () => {
  let component: ProductReloadComponent;
  let fixture: ComponentFixture<ProductReloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductReloadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductReloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
