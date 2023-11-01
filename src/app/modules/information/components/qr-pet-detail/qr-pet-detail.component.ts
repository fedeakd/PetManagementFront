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
    petSex: 1,
    petBirthdayDate: "12/12/2023",
    petOfBread: "labrador",
    petDescription: "el perro tiene sarna por favor no lo toques",

    ownerName: "rober",
    ownerSurName: "algo",
    ownerPhoneNumber: "116887911",
    ownerPhoneNumberOther: "1168879110",
    ownerPhoneNumberOtherTwo: "1168879110",
    ownerAddress: "Buenos Aires, Lomas, san martin 2077",
    ownerEmail: "rober.algo@gmail.com",
    ownerObservation: "Por favor por cualquier duda conctate mi nunero en mi telefono yo soyt ada Por favor por cualquier duda conctate mi nunero en mi telefono yo soyt adaPor favor por cualquier duda conctate mi nunero en mi telefono yo soyt ada",


  };

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event: UIEvent) {
    this.breakpoint = ((event.target as Window).innerWidth <= 400) ? 1 : 2;
  }
}