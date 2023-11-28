import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcerdaDeComponent } from './acerda-de/acerda-de.component';
import { CursosComponent } from './cursos/cursos.component';
import { HeaderComponent } from './header/header.component';
import { RecursosComponent } from './recursos/recursos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcerdaDeComponent,
    CursosComponent,
    HeaderComponent,
    RecursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
