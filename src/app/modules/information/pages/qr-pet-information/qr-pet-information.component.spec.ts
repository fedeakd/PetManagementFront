import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPetInformationComponent } from './qr-pet-information.component';

describe('QrPetInformationComponent', () => {
  let component: QrPetInformationComponent;
  let fixture: ComponentFixture<QrPetInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrPetInformationComponent]
    });
    fixture = TestBed.createComponent(QrPetInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
