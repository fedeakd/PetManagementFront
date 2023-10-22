import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-qr-pet-form',
  templateUrl: './qr-pet-form.component.html',
  styleUrls: ['./qr-pet-form.component.css']
})
export class QrPetFormComponent {
  myForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  sexDropdown: any = {};


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
    console.log(form.value);
  }

  get f() { return this.myForm.controls; }


}
