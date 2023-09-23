import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild(SidebarComponent) sidebarComponent!: SidebarComponent;

  toggleSidebar() {
    console.log("entro")
    this.sidebarComponent.sidenav.toggle();
    //this.sidebarComponent.toggleSidenav();
  }
}
