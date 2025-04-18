import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdmBcTextComponent} from './adm-bc-text.component';

describe('AdmBcTextComponent', () => {
  let component: AdmBcTextComponent;
  let fixture: ComponentFixture<AdmBcTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmBcTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBcTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
