import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AttiviComponent } from './attivi/attivi.component';
import { HomeComponent } from './home/home.component';
import { InattiviComponent } from './inattivi/inattivi.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'attivi',
    component: AttiviComponent,
  },
  {
    path: 'inattivi',
    component: InattiviComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
