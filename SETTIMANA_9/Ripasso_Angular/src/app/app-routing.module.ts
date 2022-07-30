import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenitoreComponent } from './genitore/genitore.component';

const routes: Routes = [
  {
    path:"", // non specificando nulla nella stringa il router link si popolerà del componente cui inseriremo in component:
    component: GenitoreComponent
  }
]; // QUESTA E' LA VARIABILE CHE CI INTERESSA POPOLARE, l'array accetta solo oggetti dove inseriremo 2 chiavi-valori
//path: "" una stringa che sarà il nome della nostra rotta
//component:"" una stringa che sarà il componente visualizzato quando sarà richiesta questa rotta
// nell'html dell'app component si trova un tag router-link il quale si occupera di popolarsi a seconda della rotta richiesta

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// ORA CHE HO DICHIARATO UNA ROTTA PER IL MIO UNICO COMPONENTE GENITORE
// SPOSTIAMOCI NEL'HTML GENITORE COMPONENT ---------------------------------->c
