import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController,Loading, LoadingController, ToastController } from 'ionic-angular';
import {PeliculasProvider} from "../../providers/peliculas/peliculas";
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
  public data: any;
  public buscandoPeliculas: boolean;

  private instanciaLoading: Loading;
  private storage: Storage;

  constructor(
    public navCtrl: NavController,
    public peliculasProvider: PeliculasProvider,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    //private ngZone: NgZone,

  ) {
    this.data = {};
    //this.buscandoPeliculas = false;
    this.storage = (window as any).localStorage;
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad home');
  }

  public irListadoPeliculas(): void {
    this.navCtrl.push('listado-peliculas');
  }

  public entrar(): void {
    console.log('Datos login', this.data);
    this.showLoading('Iniciando sesión');
    setTimeout(() => {
      this.storage.setItem('session', '{auth_token: jashdkjhasdjkhaskjd}');
      //this.storage.clear();
      this.hideLoading();
      this.navCtrl.setRoot('listado-peliculas');
    }, 850);
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
