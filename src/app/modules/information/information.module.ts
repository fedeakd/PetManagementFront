import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationRoutingModule } from './information-routing.module';
import { MainInformationComponent } from './main-information/main-information.component';
import { MatCardModule } from '@angular/material/card'; // Ejemplo de importación de un módulo de Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { QRPetDetailComponent } from './components/qr-pet-detail/qr-pet-detail.component';
import { QrPetFormComponent } from './components/qr-pet-form/qr-pet-form.component';
import { QrPetInformationComponent } from './pages/qr-pet-information/qr-pet-information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';


@NgModule({
  declarations: [
    QRPetDetailComponent,
    MainInformationComponent,
    QrPetInformationComponent,
    QrPetFormComponent],
  imports: [
    CommonModule,
    InformationRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatButtonModule 
  ]
})
export class InformationModule { }
