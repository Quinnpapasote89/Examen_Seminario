import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AcerdaDeComponent } from './acerda-de/acerda-de.component';
import { RecursosComponent } from './recursos/recursos.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'acerca-de', component: AcerdaDeComponent},
  {path: 'recursos', component: RecursosComponent},
  {path: 'cursos', component:CursosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
