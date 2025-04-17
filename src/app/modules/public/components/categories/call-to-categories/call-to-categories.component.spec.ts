import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallToCategoriesComponent } from './call-to-categories.component';

describe('CallToCategoriesComponent', () => {
  let component: CallToCategoriesComponent;
  let fixture: ComponentFixture<CallToCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CallToCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CallToCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
