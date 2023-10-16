import { Component } from '@angular/core';
import { PetQRInfotmation } from 'src/app/core/model/entity/qrInformation';

@Component({
  selector: 'app-qr-pet-detail',
  templateUrl: './qr-pet-detail.component.html',
  styleUrls: ['./qr-pet-detail.component.css']
})
export class QRPetDetailComponent {
  breakpoint!: number;
  petInformation: PetQRInfotmation = {
    petName: "Paty",
    email: "perros@perdidos.com",
    petDescription: "bla bla bala bla bla",
    observation: "asdasdasda",
    ownerName: "federico santamaria",
    petBirthdayDate: "12/12/1933",
    phoneNumber: "112312412",
    phoneNumberOther: "12341412",
    socialNetworksDescription: "instagram"
  };

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event: UIEvent) {
    this.breakpoint = ((event.target as Window).innerWidth <= 400) ? 1 : 2;
  }
}
