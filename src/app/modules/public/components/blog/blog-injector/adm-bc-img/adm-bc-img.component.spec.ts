import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdmBcImgComponent} from './adm-bc-img.component';

describe('AdmBcImgComponent', () => {
  let component: AdmBcImgComponent;
  let fixture: ComponentFixture<AdmBcImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmBcImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBcImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
