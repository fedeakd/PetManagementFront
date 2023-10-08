import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRDetailComponent } from './pages/qrdetail/qrdetail.component';
import { InformationRoutingModule } from './information-routing.module';
import { MainInformationComponent } from './main-information/main-information.component';
import { MatCardModule } from '@angular/material/card'; // Ejemplo de importación de un módulo de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    QRDetailComponent,
    MainInformationComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule
  ]
})
export class InformationModule { }
