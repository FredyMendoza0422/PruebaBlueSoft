import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Autor } from '../Models/Autor.class';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  readonly rootURL = 'http://localhost:51281/api';
  
  constructor(private http: HttpClient) { }

  postAutor(data: Autor) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.rootURL + '/Autores', data);
  }
  putAutor(data: Autor) {
    return this.http.put(this.rootURL + '/Autores/' + data.IdAutor , data);
  }
  deleteAutor(id: any) {
    return this.http.delete(this.rootURL + '/Autores/' + id);
  }

  GetAutores() {
   return  this.http.get(this.rootURL + '/Autores');
  }
}
