import { Component } from '@angular/core';

@Component({
  selector: 'app-qrdetail',
  templateUrl: './qrdetail.component.html',
  styleUrls: ['./qrdetail.component.css']
})
export class QRDetailComponent {
  breakpoint!: number;

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
  }

  onResize(event: UIEvent) {
    this.breakpoint = ((event.target as Window).innerWidth <= 400) ? 1 : 2;
  }
}
