import { Component } from '@angular/core';

import {  BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home', 
  templateUrl: 'home.html',
})
export class HomePage {

  constructor( 
    private barcodeScanner: BarcodeScanner,
    public toastCtrl: ToastController
    ) {

  }

  scan(){

    this.barcodeScanner.scan().then(barcodeData => {
     // console.log('Barcode data', barcodeData);
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
