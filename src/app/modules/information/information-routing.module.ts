import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrPetInformationComponent } from './pages/qr-pet-information/qr-pet-information.component';
import { QrPetEditComponent } from './pages/qr-pet-edit/qr-pet-edit.component';

const routes: Routes = [{

  path: '',
  children: [
    {
      path: 'QRPetInformation/:guidID',
      component: QrPetInformationComponent
    },
    {
      path: 'QRPetEdit/:token',
      component: QrPetEditComponent
    },

  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
