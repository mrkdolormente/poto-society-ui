import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShContainerComponent } from './sh-container.component';

describe('ShContainerComponent', () => {
  let component: ShContainerComponent;
  let fixture: ComponentFixture<ShContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
