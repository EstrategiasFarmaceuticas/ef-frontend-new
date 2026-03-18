import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKidzUsesComponent } from './detail-kidz-uses.component';

describe('DetailKidzUsesComponent', () => {
  let component: DetailKidzUsesComponent;
  let fixture: ComponentFixture<DetailKidzUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailKidzUsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailKidzUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
