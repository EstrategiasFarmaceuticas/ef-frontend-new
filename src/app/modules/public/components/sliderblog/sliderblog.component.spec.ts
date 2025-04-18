import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderblogComponent } from './sliderblog.component';

describe('SliderblogComponent', () => {
  let component: SliderblogComponent;
  let fixture: ComponentFixture<SliderblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderblogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
