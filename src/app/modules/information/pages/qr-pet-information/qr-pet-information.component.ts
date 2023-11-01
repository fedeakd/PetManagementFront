import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { QRService } from 'src/app/shared/service/repository/qr.service';

@Component({
  selector: 'app-qr-pet-information',
  templateUrl: './qr-pet-information.component.html',
  styleUrls: ['./qr-pet-information.component.css']
})
export class QrPetInformationComponent implements OnInit {
  isEditPetQR: boolean | null = null;
  guidID!: string;

  constructor(private routeActive: ActivatedRoute,
    private qrService: QRService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.guidID = this.routeActive.snapshot.paramMap.get('guidID') ?? "";


    forkJoin({
      petQR: this.qrService.getbyGuid(this.guidID),
    }).subscribe(data => {

      this.isEditPetQR = !data.petQR.isUsed;
      console.log(data);

    },);

    console.log(this.guidID);

  }

}
