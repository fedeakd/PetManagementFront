import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PetQRForm, PetQRInfotmation } from 'src/app/core/model/entity/qrInformation';
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

  @Input() petInformation: PetQRInfotmation | null = null;
  isEdit: boolean = false;

  constructor(
    private qrService: QRService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.sexDropdown = [
      { id: 1, name: "Macho" },
      { id: 2, name: "Hembra" }
    ];
    let MOBILE_PATTERN = /[0-9\+\-\ ]/;

    if (this.petInformation != null) {

      this.isEdit = true;
      this.myForm = new FormGroup({
        petName: new FormControl(this.petInformation.petName, [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
        petSex: new FormControl(this.petInformation.petSex, [Validators.required]),
        petBirthdayDate: new FormControl(this.petInformation.petBirthdayDate, [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
        petOfBread: new FormControl(this.petInformation.petOfBread, [Validators.maxLength(100)]),
        petDescription: new FormControl(this.petInformation.petDescription, [Validators.maxLength(500)]),

        ownerName: new FormControl(this.petInformation.ownerName, [Validators.required, Validators.maxLength(250)]),
        ownerSurName: new FormControl(this.petInformation.ownerSurName, [Validators.required, Validators.maxLength(250)]),
        ownerAddress: new FormControl(this.petInformation.ownerAddress, [Validators.required, Validators.minLength(1), Validators.maxLength(250)]),
        ownerPhoneNumber: new FormControl(this.petInformation.ownerPhoneNumber, [Validators.required, Validators.pattern(MOBILE_PATTERN)]),
        ownerPhoneNumberOther: new FormControl(this.petInformation.ownerPhoneNumberOther, [Validators.maxLength(50)]),
        ownerPhoneNumberOtherTwo: new FormControl(this.petInformation.ownerPhoneNumberOtherTwo, [Validators.maxLength(50)]),
        ownerEmail: new FormControl(this.petInformation.ownerEmail, [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(100)]),
        ownerObservation: new FormControl(this.petInformation.ownerObservation, [Validators.maxLength(500)]),
      });
    } else {
      this.myForm = new FormGroup({
        petName: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
        petSex: new FormControl(1, [Validators.required]),
        petBirthdayDate: new FormControl(Date.now(), [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
        petOfBread: new FormControl("", [Validators.maxLength(100)]),
        petDescription: new FormControl("", [Validators.maxLength(500)]),

        ownerName: new FormControl("", [Validators.required, Validators.maxLength(250)]),
        ownerSurName: new FormControl("", [Validators.required, Validators.maxLength(250)]),
        ownerAddress: new FormControl("", [Validators.required, Validators.minLength(1), Validators.maxLength(250)]),
        ownerPhoneNumber: new FormControl("", [Validators.required, Validators.pattern(MOBILE_PATTERN)]),
        ownerPhoneNumberOther: new FormControl("", [Validators.maxLength(50)]),
        ownerPhoneNumberOtherTwo: new FormControl("", [Validators.maxLength(50)]),
        ownerEmail: new FormControl("", [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(100)]),
        ownerObservation: new FormControl("", [Validators.maxLength(500)]),
      });
    }
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

    if (this.isEdit) {
      this.qrService.EditPetQrInformation(this.guidID, petQR).subscribe((data: {}) => {
        // location.reload();
        this.router.navigateByUrl(`/Information/QRPetInformation/${this.guidID}`);
      }, err => {
        console.log(err);
        // if (err?.reponseError)
        // this.messageError = JSON.parse(err?.reponseError)?.Description[0];
      },);
    } else {
      this.qrService.CreatePetQrInformation(this.guidID, petQR).subscribe((data: {}) => {
        location.reload();
      }, err => {
        console.log(err);
        // if (err?.reponseError)
        // this.messageError = JSON.parse(err?.reponseError)?.Description[0];
      },);
    }

    console.log(form.value);
  }

  get f() { return this.myForm.controls; }


}
