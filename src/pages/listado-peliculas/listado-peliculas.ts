import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {PeliculasProvider} from "../../providers/peliculas/peliculas";
import {HomePage} from "../home/home";

@IonicPage({
  name: 'listado-peliculas'
})
@Component({
  selector: 'page-listado-peliculas',
  templateUrl: 'listado-peliculas.html',
})
export class ListadoPeliculasPage {
  public listadoPeliculas;
  public arrayPeliculas: any[];
  public nombrePeliculas: String;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public peliculasProvider: PeliculasProvider,
    private modalCtrl: ModalController) {
    this.arrayPeliculas = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListadoPeliculasPage');
    this.listadoPeliculas = this.navParams.get('peliculasLista');

    if (!this.listadoPeliculas) {
      this.listadoPeliculas = [];
    }

    console.log('nombrePeliculas', this.nombrePeliculas)
    this.arrayPeliculas = this.listadoPeliculas.Search;
    console.log('this.listadoPeliculas', this.listadoPeliculas);
//    this.arrayPeliculas = this.listadoPeliculas.Search;
//    console.log('this.listadoPeliculas', this.listadoPeliculas);
  }

  public goDetallePelicula(pelicula: any): void {
    let modal = this.modalCtrl.create('detalle-peliculas', { pelicula });
    modal.present();
    modal.onDidDismiss((data) => {
      console.log('Modal se cierra');
    });
  }

  public abrirLinkImdb(pelicula): void {
    let url = 'https://imdb.com/title/' + pelicula.imdbID;
    window.open(url, '_system');
  }

  public sharePelicula(pelicula): void {
    console.log('sharePelicula', pelicula);
  }

  public cerrarModal(): void {
    this.navCtrl.pop();
  }
}
