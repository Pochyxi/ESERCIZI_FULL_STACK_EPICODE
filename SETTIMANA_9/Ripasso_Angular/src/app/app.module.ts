import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenitoreComponent } from './genitore/genitore.component';
import { FiglioComponent } from './figlio/figlio.component';
import { FormsModule } from '@angular/forms';
import { EvidenziaDirective } from './evidenzia.directive';
import { AnteprimaPipe } from './anteprima.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenitoreComponent,
    FiglioComponent,
    EvidenziaDirective,
    AnteprimaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
