import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallProductsComponent } from './call-products.component';

describe('CallProductsComponent', () => {
  let component: CallProductsComponent;
  let fixture: ComponentFixture<CallProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
