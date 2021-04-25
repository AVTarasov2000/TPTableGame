import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSettingsModalDialogComponent } from './game-settings-modal-dialog.component';

describe('GameSettingsModalDialogComponent', () => {
  let component: GameSettingsModalDialogComponent;
  let fixture: ComponentFixture<GameSettingsModalDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSettingsModalDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSettingsModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
