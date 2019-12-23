import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutorComponent } from './Pages/autor/autor.component';
import { CategoriaComponent } from './Pages/categoria/categoria.component';
import { LibroComponent } from './Pages/libro/libro.component';

const routes: Routes = [
  {path: 'Autor' , component: AutorComponent},
  {path: 'Categoria' , component: CategoriaComponent},
  {path: 'Libro' , component: LibroComponent},
  {path: '**' , pathMatch: 'full' , redirectTo: 'Autor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
