import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';


@IonicPage()
@Component({
  selector: 'page-guardados',
  templateUrl: 'guardados.html',
})
export class GuardadosPage {

  historial: ScanData[] = [];

  constructor(
    private _historial:HistorialProvider
  ) {
  }

  ionViewDidLoad() {
    this.historial = this._historial.cargar_historial();
  }

  abrir_scan( index:number ){
    this._historial.abrir_scan( index );
  }

}
