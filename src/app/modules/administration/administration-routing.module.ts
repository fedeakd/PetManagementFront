import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateQRComponent } from './pages/generate-qr/generate-qr.component';

const routes: Routes = [{

  path: '',
  children: [
    {
      path: 'generateQR',
      component: GenerateQRComponent
    },

    ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
