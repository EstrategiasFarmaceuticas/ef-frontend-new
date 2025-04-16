import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBcTitleComponent } from './adm-bc-title.component';

describe('AdmBcTitleComponent', () => {
  let component: AdmBcTitleComponent;
  let fixture: ComponentFixture<AdmBcTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmBcTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBcTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
