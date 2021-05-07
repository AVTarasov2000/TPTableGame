import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from './login-page/login-page.component';
import {MainPageComponent} from './main-page/main-page.component';
import {GamePageComponent} from './game-page/game-page.component';
import {GamesInProgressPageComponent} from './games-in-progress-page/games-in-progress-page.component';
import {HistoryPageComponent} from './history-page/history-page.component';
import {GameFieldComponent} from './game-field/game-field.component';
import {WaitingRoomPageComponent} from './waiting-room-page/waiting-room-page.component';
import {SignInPageComponent} from './sign-in-page/sign-in-page.component';
import {UserPageComponent} from './user-page/user-page.component';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'main', component: MainPageComponent },
  {path: 'gamePage', component: GamePageComponent},
  {path: 'gamesInProgress', component: GamesInProgressPageComponent},
  {path: 'history', component: HistoryPageComponent},
  {path: 'game', component: GameFieldComponent},
  {path: 'waitingRoom', component: WaitingRoomPageComponent},
  {path: 'signin', component: SignInPageComponent},
  {path: 'myPage', component: UserPageComponent},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
