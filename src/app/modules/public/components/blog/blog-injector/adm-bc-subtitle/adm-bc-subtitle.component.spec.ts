import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdmBcSubtitleComponent} from './adm-bc-subtitle.component';

describe('AdmBcSubtitleComponent', () => {
  let component: AdmBcSubtitleComponent;
  let fixture: ComponentFixture<AdmBcSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmBcSubtitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBcSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
