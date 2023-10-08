import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/account/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { AdministrationModule } from './modules/administration/administration.module';
import { AuthGuard } from './core/helper/auth.guard';
import { MainInformationComponent } from './modules/information/main-information/main-information.component';
import { InformationModule } from './modules/information/information.module';

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
    canActivate: [AuthGuard],
    path: '',
    component: MainComponent,
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
