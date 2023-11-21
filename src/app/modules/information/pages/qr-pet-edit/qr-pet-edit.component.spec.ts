import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPetEditComponent } from './qr-pet-edit.component';

describe('QrPetEditComponent', () => {
  let component: QrPetEditComponent;
  let fixture: ComponentFixture<QrPetEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QrPetEditComponent]
    });
    fixture = TestBed.createComponent(QrPetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
