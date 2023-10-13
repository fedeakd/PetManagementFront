import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateQRComponent } from './pages/generate-qr/generate-qr.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainAdministrationComponent } from './main-administration/main-administration.component';
import { SidebarComponent } from 'src/app/layout/sidebar/sidebar.component';
import { FooterComponent } from 'src/app/layout/footer/footer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIcon, MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    GenerateQRComponent,
    MainAdministrationComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdministrationRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule, MatListModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AdministrationModule { }
