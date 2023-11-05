import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetQRForm } from 'src/app/core/model/entity/qrInformation';
import { QRService } from 'src/app/shared/service/repository/qr.service';

@Component({
  selector: 'app-qr-pet-form',
  templateUrl: './qr-pet-form.component.html',
  styleUrls: ['./qr-pet-form.component.css']
})
export class QrPetFormComponent {
  @Input() guidID!: string;
  myForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  sexDropdown: any = {};

  constructor(
    private qrService: QRService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.sexDropdown = [
      { id: 1, name: "Hombre" },
      { id: 2, name: "Mujer" },
      { id: 3, name: "Indefinido" }
    ];
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;


    this.myForm = new FormGroup({
      petName: new FormControl("petName1", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      petSex: new FormControl(3, [Validators.required]),
      petBirthdayDate: new FormControl(Date.now(), [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      petOfBread: new FormControl("petDescription2", [Validators.maxLength(100)]),
      petDescription: new FormControl("petDescription2", [Validators.maxLength(500)]),

      ownerName: new FormControl("ownerName5", [Validators.required, Validators.maxLength(250)]),
      ownerSurName: new FormControl("ownerName5", [Validators.required, Validators.maxLength(250)]),
      ownerAddress: new FormControl("email3", [Validators.required, Validators.minLength(1), Validators.maxLength(250)]),
      ownerPhoneNumber: new FormControl("phoneNu7mber", [Validators.required, Validators.pattern(MOBILE_PATTERN)]),
      ownerPhoneNumberOther: new FormControl("phone7NumberOther", [Validators.maxLength(50)]),
      ownerPhoneNumberOtherTwo: new FormControl("phone7NumberOther", [Validators.maxLength(50)]),
      ownerEmail: new FormControl("email3", [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(100)]),
      ownerObservation: new FormControl("observation4", [Validators.maxLength(500)]),




    });
  }

  onSubmit(form: FormGroup) {

    let petQR: PetQRForm;

    console.log(this.guidID);

    petQR = {
      petName: form.value.petName,
      petSex: form.value.petSex, //combo de eleccion
      petBirthdayDate: form.value.petBirthdayDate,
      petOfBread: form.value.petOfBread,
      petDescription: form.value.petDescription,

      ownerName: form.value.ownerName,
      ownerSurName: form.value.ownerSurName,
      ownerPhoneNumber: form.value.ownerPhoneNumber,
      ownerPhoneNumberOther: form.value.ownerPhoneNumberOther,
      ownerPhoneNumberOtherTwo: form.value.ownerPhoneNumberOtherTwo,
      ownerAddress: form.value.ownerAddress,
      ownerEmail: form.value.ownerEmail,
      ownerObservation: form.value.ownerObservation,
    }

    this.qrService.CreatePetQrInformation(this.guidID, petQR).subscribe((data: {}) => {
      location.reload();
    }, err => {
      console.log(err);
      // if (err?.reponseError)
      // this.messageError = JSON.parse(err?.reponseError)?.Description[0];
    },);

    console.log(form.value);
  }

  get f() { return this.myForm.controls; }


}
