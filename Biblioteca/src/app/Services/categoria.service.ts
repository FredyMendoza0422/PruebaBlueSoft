import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../Models/Categoria.class';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  readonly rootURL = 'http://localhost:51281/api';

  constructor(private http: HttpClient) { }

  postCategoria(data: Categoria) {
    return this.http.post(this.rootURL + '/Categorias', data);
  }
  putCategoria(data: Categoria) {
    return this.http.put(this.rootURL + '/Categorias/' + data.IdCategoria , data);
  }
  deleteCategoria(id: any) {
    return this.http.delete(this.rootURL + '/Categorias/' + id);
  }

  GetCategoria() {
   return  this.http.get(this.rootURL + '/Categorias');
  }
}