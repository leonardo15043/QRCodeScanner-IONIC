
export class ScanData{

    info:string;
    tipo:string;

    constructor( texto:string ){

        this.tipo = "no definido";
        this.info = texto;

        if( texto.startsWith("https")){
            this.tipo = "https";
        }else if( texto.startsWith("geo")){
            this.tipo = "mapa";
        }else if( texto.startsWith("BEGIN:VCARD")){
            this.tipo = "contacto"
        }else if( texto.startsWith("MATMSG:TO")){
            this.tipo = "correo"
        }

    } 
}