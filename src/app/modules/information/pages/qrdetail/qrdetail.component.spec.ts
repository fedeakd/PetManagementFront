import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QRDetailComponent } from './qrdetail.component';

describe('QRDetailComponent', () => {
  let component: QRDetailComponent;
  let fixture: ComponentFixture<QRDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QRDetailComponent]
    });
    fixture = TestBed.createComponent(QRDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
