import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isCollapsed = false;
  @Output() toggleSidenav = new EventEmitter<void>();


  toggleSidebar() {
    this.toggleSidenav.emit();
  }

  ngOnInit(): void {
  }
}
