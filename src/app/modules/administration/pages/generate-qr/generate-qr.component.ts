import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-qr',
  templateUrl: './generate-qr.component.html',
  styleUrls: ['./generate-qr.component.css']
})
export class GenerateQRComponent {
  numero!: number;
  submitForm() {
    if (this.numero >= 0 && this.numero <= 100) {
      // Aquí puedes realizar alguna acción con el número válido.
      console.log('Número válido:', this.numero);
    } else {
      console.log('Número fuera de rango');
    }
  }
}
