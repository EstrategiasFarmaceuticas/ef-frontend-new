import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsesproductComponent } from './usesproduct.component';

describe('UsesproductComponent', () => {
  let component: UsesproductComponent;
  let fixture: ComponentFixture<UsesproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsesproductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsesproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
