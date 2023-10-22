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
    ownerAddress: "perros@perdidos.com",
    petDescription: "bla bla bala bla bla",
    ownerObservation: "asdasdasda",
    ownerName: "federico santamaria",
    ownerEmail: "asdasd",
    ownerSurName: "dasdasdasdas",
    petOfBread: "asdasdas",
    petSex: 1,
    petBirthdayDate: "12/12/1933",
    ownerPhoneNumber: "112312412",
    ownerPhoneNumberOther: "12341412",
    ownerPhoneNumberOtherTwo: "instagram"
  };

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event: UIEvent) {
    this.breakpoint = ((event.target as Window).innerWidth <= 400) ? 1 : 2;
  }
}