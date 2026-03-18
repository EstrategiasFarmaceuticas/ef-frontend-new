import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecoverUsesComponent } from './detail-recover-uses.component';

describe('DetailRecoverUsesComponent', () => {
  let component: DetailRecoverUsesComponent;
  let fixture: ComponentFixture<DetailRecoverUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRecoverUsesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRecoverUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
