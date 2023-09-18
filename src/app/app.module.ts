import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { RouterConfigUser, RouterConfigUserToken } from './core/configuration/routerAssistant';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: RouterConfigUserToken, useValue: RouterConfigUser },


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
