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
    private _historial: HistorialProvider
    ) {
 
  }

  scan(){

    console.log("Realizando scan");

    this.barcodeScanner.scan().then(barcodeData => {

     if(barcodeData.text != null ){
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
