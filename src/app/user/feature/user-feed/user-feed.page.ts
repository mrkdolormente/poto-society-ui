import { Component, OnInit } from '@angular/core';
import { UserPostCard } from '../../data-access/models/user';

@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.page.html',
  styleUrls: ['./user-feed.page.scss'],
})
export class UserFeedPage implements OnInit {
  constructor() {}

  postData: UserPostCard[] = [
    {
      UserName: 'Mark Dolormente',
      UserImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      PostDate: '1m',
      PostImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      PostMessage:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      UserName: 'Mark Dolormente',
      UserImage: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      PostDate: '1m',
      PostImage: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      PostMessage:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
  ];

  ngOnInit(): void {}
}
