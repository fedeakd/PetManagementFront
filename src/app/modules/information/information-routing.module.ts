import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrPetInformationComponent } from './pages/qr-pet-information/qr-pet-information.component';

const routes: Routes = [{

  path: '',
  children: [
    {
      path: 'QRPetInformation/:guidID',
      component: QrPetInformationComponent
    },

  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
