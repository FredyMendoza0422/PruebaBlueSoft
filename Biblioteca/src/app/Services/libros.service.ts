import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from '../Models/Libro.class';

@Injectable({
    providedIn: 'root'
  })
  export class LibrosService {
  
    readonly rootURL = 'http://localhost:51281/api';
    
    constructor(private http: HttpClient) { }
  
    postLibro(data: Libro) {
      return this.http.post(this.rootURL + '/Libros', data);
    }
    putLibro(data: Libro) {
      return this.http.put(this.rootURL + '/Libros/' + data.IdLibro , data);
    }
    deleteLibro(id: any) {
      return this.http.delete(this.rootURL + '/Libros/' + id);
    }
  
    GetLibros() {
     return  this.http.get(this.rootURL + '/Libros');
    }
  }
  
