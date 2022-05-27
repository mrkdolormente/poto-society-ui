import { Component, Input, OnInit } from '@angular/core';
import { UserPostCard } from '../../data-access/models/user';

@Component({
  selector: 'app-user-post-card',
  templateUrl: './user-post-card.component.html',
  styleUrls: ['./user-post-card.component.scss'],
})
export class UserPostCardComponent implements OnInit {
  @Input('postDetails') postDetails: UserPostCard;

  constructor() {}

  ngOnInit(): void {}
}
