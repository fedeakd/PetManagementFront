import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QRDetailComponent } from './pages/qrdetail/qrdetail.component';
import { InformationRoutingModule } from './information-routing.module';
import { MainInformationComponent } from './main-information/main-information.component';


@NgModule({
  declarations: [
    QRDetailComponent,
    MainInformationComponent],
  imports: [
    CommonModule,
    InformationRoutingModule
  ]
})
export class InformationModule { }
