import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesInProgressPageComponent } from './games-in-progress-page.component';

describe('GamesInProgressPageComponent', () => {
  let component: GamesInProgressPageComponent;
  let fixture: ComponentFixture<GamesInProgressPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesInProgressPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesInProgressPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
