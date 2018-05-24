import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
//import {LoginPage} from "../pages/login/login";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { PeliculasProvider } from '../providers/peliculas/peliculas';

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
  //  LoginPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
   HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    PeliculasProvider,
  ]
})
export class AppModule {}
