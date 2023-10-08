import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/account/login/login.component';
import { AdministrationModule } from './modules/administration/administration.module';
import { AuthGuard } from './core/helper/auth.guard';
import { MainInformationComponent } from './modules/information/main-information/main-information.component';
import { InformationModule } from './modules/information/information.module';
import { MainAdministrationComponent } from './modules/administration/main-administration/main-administration.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Administration/generateQR',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    // canActivate: [AuthGuard],
    path: '',
    component: MainAdministrationComponent,
    children: [
      {
        path: 'Administration',
        loadChildren: () =>
          AdministrationModule
      },
    ]
  },
  {
    path: '',
    component: MainInformationComponent,
    children: [
      {
        path: 'Information',
        loadChildren: () =>
          InformationModule
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
