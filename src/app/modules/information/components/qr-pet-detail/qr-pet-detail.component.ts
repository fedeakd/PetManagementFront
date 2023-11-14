import { Component, Input } from '@angular/core';
import { PetQRInfotmation } from 'src/app/core/model/entity/qrInformation';

@Component({
  selector: 'app-qr-pet-detail',
  templateUrl: './qr-pet-detail.component.html',
  styleUrls: ['./qr-pet-detail.component.css']
})
export class QRPetDetailComponent {
  @Input() petInformation!: PetQRInfotmation;

  ngOnInit() {
  }

}