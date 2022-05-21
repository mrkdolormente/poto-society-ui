import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFeedPage } from './user-feed.page';

describe('UserFeedComponent', () => {
  let component: UserFeedPage;
  let fixture: ComponentFixture<UserFeedPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFeedPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFeedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
