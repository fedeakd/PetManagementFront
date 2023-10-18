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
      description: new FormControl("description", [Validators.required, Validators.minLength(1), Validators.maxLength(25)]),
    });
  }

  onSubmit(form: FormGroup) {
  }
  
  get f() { return this.myForm.controls; }


}
