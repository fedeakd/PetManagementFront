import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QRDetailComponent } from './pages/qrdetail/qrdetail.component';

const routes: Routes = [{

  path: '',
  children: [
    {
      path: 'QRDetail',
      component: QRDetailComponent
    },

  ]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformationRoutingModule { }
