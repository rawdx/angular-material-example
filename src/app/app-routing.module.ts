import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { TablaComponent } from './tabla/tabla.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'navbar', component: NavbarComponent, children: [
    { path: 'board', component: BoardComponent },
    { path: 'tabla', component: TablaComponent }]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
