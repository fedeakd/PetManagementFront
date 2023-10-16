import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPetFormComponent } from './qr-pet-form.component';

describe('QrPetFormComponent', () => {
  let component: QrPetFormComponent;
  let fixture: ComponentFixture<QrPetFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrPetFormComponent]
    });
    fixture = TestBed.createComponent(QrPetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
