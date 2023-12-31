import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PetQRInfotmation } from 'src/app/core/model/entity/qrInformation';
import { PlacesService } from 'src/app/shared/service/repository/places.service';
import { QRService } from 'src/app/shared/service/repository/qr.service';

@Component({
  selector: 'app-qr-pet-detail',
  templateUrl: './qr-pet-detail.component.html',
  styleUrls: ['./qr-pet-detail.component.css'],
})
export class QRPetDetailComponent {
  @Input() petInformation!: PetQRInfotmation;
  formattedDate!: string;

  constructor(
    private routeActive: ActivatedRoute,
    private qrService: QRService,
    private placesService: PlacesService,
    private router: Router
  ) {
    this.placesService.getUserLocation().then(() => {
      this.sendCoords();
    });
  }

  ngOnInit() {
    this.formattedDate = new Date(
      this.petInformation.petBirthdayDate ?? ''
    ).toLocaleDateString();

    console.log(this.placesService);
  }

  sendCoords() {
    console.log('1');
    console.log(this.placesService.userLocation);

    if (
      this.placesService.userLocation !== undefined &&
      this.placesService.userLocation[1] !== undefined &&
      this.placesService.userLocation[0] !== undefined
    ) {
      console.log('2');
      let guid: string = this.routeActive.snapshot.paramMap.get('guidID') ?? '';
      forkJoin({
        url: this.qrService.sendEditEmailCoord(
          guid,
          this.placesService.userLocation[1],
          this.placesService.userLocation[0]
        ),
      }).subscribe((data) => {
        console.log(data);
        console.log(
          'Mail enviado. Recuerde revisar spam y que puede demorar unas horas en llegar el mail'
        );
      });
    }
  }

  requestEditInformation() {
    let guid: string = this.routeActive.snapshot.paramMap.get('guidID') ?? '';

    forkJoin({
      url: this.qrService.sendEditEmail(guid),
    }).subscribe((data) => {
      console.log(data);
      console.log(
        'Mail enviado. Recuerde revisar spam y que puede demorar unas horas en llegar el mail'
      );
    });
  }
}
