import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  @Output()
  @ViewChild('sidenav') sidenav!: MatSidenav;

  ngOnInit(): void { }

  toggleSidenav() {
    console.log("entro por 2")

    this.sidenav.toggle(true);
  }
}
