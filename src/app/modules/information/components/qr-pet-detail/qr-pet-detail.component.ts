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
  editRequestSended: boolean = false;
  editRequestText: string = 'Se enviará un un enlace al mail registrado';

  constructor(
    private routeActive: ActivatedRoute,
    private qrService: QRService,
    private placesService: PlacesService,
    private router: Router
  ) {
    this.placesService
      .getUserLocation()
      .then(() => {
        this.sendCoords(true);
      })
      .catch(() => {
        this.sendCoords(false);
      });
  }

  ngOnInit() {
    this.formattedDate = new Date(
      this.petInformation.petBirthdayDate ?? ''
    ).toLocaleDateString();
  }

  sendCoords(acceptLocalization: boolean) {
    let guid: string = this.routeActive.snapshot.paramMap.get('guidID') ?? '';

    if (!acceptLocalization) {
      forkJoin({
        url: this.qrService.sendEditEmailCoord(guid, 0, 0),
      }).subscribe((data) => {
        console.log(
          'Mail enviado. Recuerde revisar spam y que puede demorar unas horas en llegar el mail'
        );
      });
    } else {
      if (
        this.placesService.userLocation !== undefined &&
        this.placesService.userLocation[1] !== undefined &&
        this.placesService.userLocation[0] !== undefined
      ) {
        forkJoin({
          url: this.qrService.sendEditEmailCoord(
            guid,
            this.placesService.userLocation[1],
            this.placesService.userLocation[0]
          ),
        }).subscribe((data) => {
          console.log(
            'Mail enviado. Recuerde revisar spam y que puede demorar unas horas en llegar el mail'
          );
        });
      }
    }
  }

  requestEditInformation() {
    let guid: string = this.routeActive.snapshot.paramMap.get('guidID') ?? '';

    forkJoin({
      url: this.qrService.sendEditEmail(guid),
    }).subscribe((data) => {
      this.editRequestSended = true;
      this.editRequestText =
        'Mail enviado. Recuerde revisar spam y que puede demorar unas horas en llegar el mail';
    });
  }
}
