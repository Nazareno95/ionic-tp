import {Component} from '@angular/core';
import { IonicPage, NavController,Loading, LoadingController, ToastController,NavParams } from 'ionic-angular';
import {PeliculasProvider} from "../../providers/peliculas/peliculas";
import {LoginPage} from "../login/login";

@IonicPage(
  {
    name:'home'
  }
)
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public datosBusqueda: any;
  private login: LoginPage;
  private instanciaLoading: Loading;
  private storage: Storage;

  constructor(
    public navCtrl: NavController,
    public peliculasProvider: PeliculasProvider,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,

  ) {
  this.datosBusqueda = {};
  this.storage = (window as any).localStorage;
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad home');
  }
  public buscarPelicula(): void {
    if (!this.datosBusqueda.texto) {
      let toastError = this.toastCtrl.create({
        message: 'Ingrese texto por favor',
        duration: 1500,
        position: 'bottom'
      });
      toastError.present();
      return;
    }
    let loading = this.loadingCtrl.create({ content: 'Buscando Peliculas..' });
    loading.present();
    this.peliculasProvider.
    buscarPelicula(this.datosBusqueda.texto).then(
      (success) => { this.successBuscarPelicula(success, loading) },
      (error) => { this.errorBuscarPelicula(error, loading) });
  }
  private successBuscarPelicula(resultado, loading): void {
    loading.dismiss();
    let data = {
      PeliculaLista: resultado.results
    };
    this.navCtrl.push('listado-peliculas', data);
    console.log('successBuscarPelicula', resultado);
   this.navCtrl.setRoot('listado-peliculas', data);

  }
  private errorBuscarPelicula(error, loading): void {
    loading.dismiss();
    console.log('errorBuscarPelicula', error);
  }
private showLoading(message?): void {
  this.instanciaLoading = this.loadingCtrl.create({
    content: message,
   });
   this.instanciaLoading.present();
 }

 private hideLoading(): void {
  if (this.instanciaLoading) {
       this.instanciaLoading.dismiss();
       this.instanciaLoading = null;
       }
  }

}
