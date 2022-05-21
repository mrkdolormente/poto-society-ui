import { Component, Input, OnInit } from '@angular/core';
import { ShSidenavComponent } from '../sh-sidenav/sh-sidenav.component';

@Component({
  selector: 'app-sh-header',
  templateUrl: './sh-header.component.html',
  styleUrls: ['./sh-header.component.scss'],
})
export class ShHeaderComponent implements OnInit {
  @Input('shSidenav') shSidenav?: ShSidenavComponent;

  constructor() {}

  ngOnInit(): void {}

  toggleDrawer() {
    this.shSidenav.toggleDrawer();
  }
}
