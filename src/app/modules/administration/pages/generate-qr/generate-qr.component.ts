import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { QRService } from 'src/app/shared/service/repository/QR.service';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQRComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private qrService: QRService,
    private routeActive: ActivatedRoute,
    private router: Router,) { }
  ngOnInit(): void {

    forkJoin({
      listHolidayCountry: this.qrService.get(123),
    }).subscribe(data => {
      console.log(data);
    });

    this.myForm = new FormGroup({
      countQR: new FormControl([Validators.required, Validators.min(1), Validators.max(100)]),
    });
  }

  get f() { return this.myForm.controls; }


  onSubmit(form: FormGroup) {
    if (form.valid) {
      // Procesa el número aquí
      console.log('Número ingresado:', form.value.countQR);
    }
  }
}
