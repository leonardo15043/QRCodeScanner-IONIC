import { Component } from '@angular/core';

import {  BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController , Platform } from 'ionic-angular';

import { HistorialProvider } from '../../providers/historial/historial';


@Component({
  selector: 'page-home', 
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( 
    private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController,
    private platform: Platform,
    private _historial: HistorialProvider
    ) {

  }

  scan(){

    console.log("Realizando scan");

    if( !this.platform.is('cordova') ){
      this._historial.agregar_historial("http://google.com");
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {


     console.log('Result: ', barcodeData.text );
     console.log('Format: ', barcodeData.format );
     console.log('Result: ', barcodeData.text );

     if( barcodeData.cancelled == true && barcodeData.text != null ){
        this._historial.agregar_historial( barcodeData.text );
     }

     }).catch(err => {
         this.alerta('Error: '+err);
     });

  }

  alerta( mensaje ){
      const toast = this.toastCtrl.create({
        message: mensaje,
        duration: 3000
      });
      toast.present();
  }

}
