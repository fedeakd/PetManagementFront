import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PetQRInfotmation } from 'src/app/core/model/entity/qrInformation';
import { QRService } from 'src/app/shared/service/repository/qr.service';

@Component({
  selector: 'app-qr-pet-detail',
  templateUrl: './qr-pet-detail.component.html',
  styleUrls: ['./qr-pet-detail.component.css']
})
export class QRPetDetailComponent {
  @Input() petInformation!: PetQRInfotmation;
  formattedDate!: string;

  constructor(private routeActive: ActivatedRoute,
    private qrService: QRService,
    private router: Router) {

  }

  ngOnInit() {
    this.formattedDate = new Date(this.petInformation.petBirthdayDate ?? "").toLocaleDateString();
  }

  requestEditInformation() {
    let guid: string = this.routeActive.snapshot.paramMap.get('guidID') ?? "";

    forkJoin({
      url: this.qrService.sendEditEmail(guid),
    }).subscribe(data => {
      console.log(data);
      console.log("Mail enviado. Recuerde revisar spam y que puede demorar unas horas en llegar el mail");
    },);
  }

}