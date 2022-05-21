import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShSidenavComponent } from './sh-sidenav.component';

describe('ShSidenavComponent', () => {
  let component: ShSidenavComponent;
  let fixture: ComponentFixture<ShSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
