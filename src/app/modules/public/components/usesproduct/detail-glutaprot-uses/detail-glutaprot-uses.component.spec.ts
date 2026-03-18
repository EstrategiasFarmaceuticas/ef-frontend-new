import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGlutaprotUsesComponent } from './detail-glutaprot-uses.component';

describe('DetailGlutaprotUsesComponent', () => {
  let component: DetailGlutaprotUsesComponent;
  let fixture: ComponentFixture<DetailGlutaprotUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailGlutaprotUsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailGlutaprotUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
