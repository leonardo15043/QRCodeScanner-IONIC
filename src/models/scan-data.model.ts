
export class ScanData{

    info:string;
    tipo:string;

    constructor( texto:string ){
        this.tipo = "no definido";
        this.info = texto;

        if( texto.startsWith("https")){
            this.tipo = "https";
        }
    }
}