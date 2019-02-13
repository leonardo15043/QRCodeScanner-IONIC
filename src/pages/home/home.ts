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
      //this._historial.agregar_historial("https://google.com");
      this._historial.agregar_historial( `BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD` );
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {


     console.log('Result: ', barcodeData.text );
     console.log('Format: ', barcodeData.format );
     console.log('Result: ', barcodeData.text );
    console.log(barcodeData.cancelled);
     if(barcodeData.text != null ){
       console.log("hola");
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
