import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-settings-modal-dialog',
  templateUrl: './game-settings-modal-dialog.component.html',
  styleUrls: ['./game-settings-modal-dialog.component.css']
})
export class GameSettingsModalDialogComponent implements OnInit {


  constructor() { }

  @Input('visible')
  public visible = false;
  public visibleAnimate = false;

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal')) {
      this.hide();
    }
  }

  ngOnInit(): void {
    if (this.visible){
      this.show();
    }
  }

}
