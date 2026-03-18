import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProteinUsesComponent } from './detail-protein-uses.component';

describe('DetailProteinUsesComponent', () => {
  let component: DetailProteinUsesComponent;
  let fixture: ComponentFixture<DetailProteinUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailProteinUsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProteinUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
