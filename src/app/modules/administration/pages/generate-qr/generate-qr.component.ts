import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQRComponent implements OnInit {
  myForm!: FormGroup;

  ngOnInit(): void {
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
