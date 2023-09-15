import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRComponent } from './pages/generate-qr/generate-qr.component';



@NgModule({
  declarations: [
    GenerateQRComponent
  ],
  imports: [
    CommonModule,
    AdministrationModule
  ]
})
export class AdministrationModule { }
