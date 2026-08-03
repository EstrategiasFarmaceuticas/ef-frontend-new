import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOncareUsesComponent } from './detail-oncare-uses.component';

describe('DetailOncareUsesComponent', () => {
  let component: DetailOncareUsesComponent;
  let fixture: ComponentFixture<DetailOncareUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailOncareUsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOncareUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
