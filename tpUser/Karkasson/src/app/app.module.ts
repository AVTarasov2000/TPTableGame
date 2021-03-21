import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { GamePageComponent } from './game-page/game-page.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { GamesInProgressPageComponent } from './games-in-progress-page/games-in-progress-page.component';
import { GameSettingsModalDialogComponent } from './game-settings-modal-dialog/game-settings-modal-dialog.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { WaitingRoomPageComponent } from './waiting-room-page/waiting-room-page.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    NavigationBarComponent,
    ToolBarComponent,
    GamePageComponent,
    GameFieldComponent,
    HistoryPageComponent,
    GamesInProgressPageComponent,
    GameSettingsModalDialogComponent,
    SignInPageComponent,
    UserPageComponent,
    WaitingRoomPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
