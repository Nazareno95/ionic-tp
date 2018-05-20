import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PeliculasProvider {
  private nombrePelicula: any;

  constructor(public http: HttpClient) {
    this.nombrePelicula = 'Texto uno.';
    console.log('Hello PeliculasProvider Provider');
  }


  public setNombrePelicula(nombre: string): void {
    this.nombrePelicula = nombre;
  }

  public getNombrePelicula(): string {
    return this.nombrePelicula;
  }

  public buscarPelicula(nombre: string): any {
    let url = 'http://www.omdbapi.com/?apikey=cf36c0f0&s=' + nombre;
    return this.http.get(url).toPromise();
  }

}
