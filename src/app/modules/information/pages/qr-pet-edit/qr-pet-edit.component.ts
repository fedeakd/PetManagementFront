import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PetQRInfotmation as PetQRInfotmation } from 'src/app/core/model/entity/qrInformation';
import { QRService } from 'src/app/shared/service/repository/qr.service';

@Component({
  selector: 'app-qr-pet-edit',
  templateUrl: './qr-pet-edit.component.html',
  styleUrls: ['./qr-pet-edit.component.css']
})
export class QrPetEditComponent implements OnInit {
  isEditPetQR: boolean = false;
  token!: string;
  guid!: string;
  petInformation!: PetQRInfotmation;

  constructor(private routeActive: ActivatedRoute,
    private qrService: QRService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.token = this.routeActive.snapshot.paramMap.get('token') ?? "";
    forkJoin({
      petQR: this.qrService.getbyToken(this.token),
    }).subscribe(data => {
      this.petInformation = data.petQR.petInformation;
      console.log(data);
      this.guid = data.petQR.guid;
      console.log(this.guid);
    },);
  }
}
