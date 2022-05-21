import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-sh-sidenav',
  templateUrl: './sh-sidenav.component.html',
  styleUrls: ['./sh-sidenav.component.scss'],
})
export class ShSidenavComponent implements OnInit {
  @ViewChild('drawer') drawer: MatDrawer;
  constructor() {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.drawer.toggle();
  }
}
