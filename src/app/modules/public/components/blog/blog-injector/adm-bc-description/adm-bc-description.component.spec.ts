import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBcDescriptionComponent } from './adm-bc-description.component';

describe('AdmBcDescriptionComponent', () => {
  let component: AdmBcDescriptionComponent;
  let fixture: ComponentFixture<AdmBcDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmBcDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBcDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
