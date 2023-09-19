import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  @ViewChild('sidenavContainer') sidenavContainer!: MatSidenav;
  toggleSidenav() {
    this.sidenavContainer.toggle();
  }
}
