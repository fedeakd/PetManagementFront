import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRComponent } from './pages/generate-qr/generate-qr.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GenerateQRComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdministrationRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule, // Agrega MatInputModule
    MatIconModule // Agrega MatInputModule
  ]
})
export class AdministrationModule { }
