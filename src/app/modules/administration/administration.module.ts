import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRComponent } from './pages/generate-qr/generate-qr.component';
import { AdministrationRoutingModule } from './administration-routing.module';



@NgModule({
  declarations: [
    GenerateQRComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
    ]
})
export class AdministrationModule { }
