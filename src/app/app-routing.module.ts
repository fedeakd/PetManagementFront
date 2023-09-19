import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/account/login/login.component';
import { MainComponent } from './layout/main/main.component';
import { AdministrationModule } from './modules/administration/administration.module';

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
    //canActivate: [AuthGuard],
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'Administration',
        loadChildren: () =>
          AdministrationModule
      },
      { path: '**', redirectTo: '/Administration/generateQR', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
