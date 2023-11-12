import { Component, Input } from '@angular/core';
import { PetQRInfotmation } from 'src/app/core/model/entity/qrInformation';

@Component({
  selector: 'app-qr-pet-detail',
  templateUrl: './qr-pet-detail.component.html',
  styleUrls: ['./qr-pet-detail.component.css']
})
export class QRPetDetailComponent {
  breakpoint!: number;
  @Input() petInformation!: PetQRInfotmation;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event: UIEvent) {
    this.breakpoint = ((event.target as Window).innerWidth <= 400) ? 1 : 2;
  }
}