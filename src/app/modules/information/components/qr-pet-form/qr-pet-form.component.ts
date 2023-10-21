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

  ngOnInit(): void {
    this.myForm = new FormGroup({
      petName: new FormControl("petName1", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      petDescription: new FormControl("petDescription2", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      email: new FormControl("email3", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      observation: new FormControl("observation4", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      ownerName: new FormControl("ownerName5", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      petBirthdayDate: new FormControl("petBirthdayDat6e", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      phoneNumber: new FormControl("phoneNu7mber", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      phoneNumberOther: new FormControl("phone7NumberOther", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
      socialNetworksDescription: new FormControl("social8NetworksDescription", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),




    });
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }
  
  get f() { return this.myForm.controls; }


}
