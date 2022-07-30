import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostAttiviComponent } from './post-attivi/post-attivi.component';
import { PostInattiviComponent } from './post-inattivi/post-inattivi.component';
import { SingoliAttiviComponent } from './singoli-attivi/singoli-attivi.component';
import { SingoliInattiviComponent } from './singoli-inattivi/singoli-inattivi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostCardComponent } from './post-card/post-card.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAttiviComponent,
    PostInattiviComponent,
    SingoliAttiviComponent,
    SingoliInattiviComponent,
    PostCardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
