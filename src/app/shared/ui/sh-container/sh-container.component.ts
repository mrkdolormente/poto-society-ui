import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sh-container',
  templateUrl: './sh-container.component.html',
  styleUrls: ['./sh-container.component.scss'],
})
export class ShContainerComponent implements OnInit {
  @Input('customClass') customClass: string;

  constructor() {}

  ngOnInit(): void {}
}
