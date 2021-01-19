import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AStarPageComponent } from './a-star-page.component';

describe('AStarPageComponent', () => {
  let component: AStarPageComponent;
  let fixture: ComponentFixture<AStarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AStarPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AStarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
