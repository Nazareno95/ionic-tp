import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name: 'detalle-peliculas'
})
@Component({
  selector: 'page-detalle-peliculas',
  templateUrl: 'detalle-peliculas.html',
})
export class DetallePeliculaPage {
  public detallePeliculas;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.detallePeliculas = this.navParams.get('pelicula');
    console.log('this.detallePeliculas', this.detallePeliculas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePeliculasPage');
  }

  public cerrarModal(): void {
    this.navCtrl.pop();
  }

}
