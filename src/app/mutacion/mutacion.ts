export class Mutacion {

    estadoAdn: Boolean;
    ubicacionMutaciones: String[];

    constructor(estado: Boolean, ubicaciones: String[]){
        this.estadoAdn = estado;
        this.ubicacionMutaciones = ubicaciones;
    }

}
