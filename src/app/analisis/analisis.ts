export class Analisis {

    id: Number;
    cadenaAdn: String;
    mutacion: Boolean;

    constructor(_id: Number, _cadenaAdn: String, _mutacion: Boolean){
        this.id = _id;
        this.cadenaAdn = _cadenaAdn;
        this.mutacion = _mutacion;
    }
}
