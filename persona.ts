import {direccion} from './direccion';
import {telefono} from './telefono';
import {mail} from './mail';

export class persona {
    constructor(
        private _nombre: string,
        private _apellido: string,
        private _edad: number,
        private _dni: string,
        private _cumpleaños: Date,
        private _colorFav: string,
        private _sexo: string,
        private _direcciones: Array<direccion>,
        private _mails: Array<mail>,
        private _telefonos: Array<telefono>,
        private _notas: string
    ){}
    set nombre(nombre:string){
        this._nombre = nombre;
    }
    get nombre(): string{
        return this._nombre;
    }

    set apellido(apellido:string){
        this._apellido = apellido;
    }
    get apellido(): string{
        return this._apellido;
    }

    set edad(edad:number){
        this._edad = edad;
    }
    get edad(): number{
        return this._edad;
    }

    set dni(dni:string){
        this._dni = dni;
    }
    get dni(): string{
        return this._dni;
    }

    set cumpleaños(cumpleaños:Date){
        this._cumpleaños = cumpleaños;
    }
    get cumpleaños(): Date{
        return this._cumpleaños;
    }

    set colorFav(colorFav:string){
        this._colorFav = colorFav;
    }
    get colorFav(): string{
        return this._colorFav;
    }

    set sexo(sexo:string){
        this._sexo = sexo;
    }
    get sexo(): string{
        return this._sexo;
    }

    set direcciones(direcciones: Array<direccion>){
        this._direcciones = direcciones;
    }
    get direcciones(): Array<direccion>{
        return this._direcciones;
    }
    
    set mails(mails: Array<mail>){
        this._mails = mails;
    }
    get mails(): Array<mail>{
        return this._mails;
    }

    set telefonos(telefonos: Array<telefono>){
        this._telefonos = telefonos;
    }
    get telefonos(): Array<telefono>{
        return this._telefonos;
    }

    set notas(notas:string){
        this._notas = notas;
    }
    get notas(): string{
        return this._notas;
    }

    addDireccion(newDireccion: direccion): void{
        this._direcciones.push(newDireccion);
    }
    addMail(newMail: mail): void{
        this._mails.push(newMail);
    }
    addTelefono(newTelefono: telefono): void{
        this._telefonos.push(newTelefono);
    }
    setDireccion(newDireccion: direccion): void{
        this._direcciones = [newDireccion];
    }
    setMail(newMail: mail): void{
        this._mails = [newMail];
    }
    setTelefono(newTelefono: telefono): void{
        this._telefonos = [newTelefono];
    }

    getFormaCumpleaños(): string{
        let fecha = this._cumpleaños;
        let formaCumple = `${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`;
        return formaCumple;
    }

    showAllDirecciones(): string{
        let allDirecciones: string = '';
        for (let i = 0; i < this._direcciones.length; i++){
            allDirecciones = `${allDirecciones}\n\tDirección ${i + 1}: ${this._direcciones[i].showDireccion()}`;
        }
        return allDirecciones;    
    }

    showAllTelefonos(): string{
        let allTelefonos: string = '';
        for (let i = 0; i < this._telefonos.length; i++) {
            allTelefonos = `${allTelefonos}\n\tTeléfono ${i + 1}: ${this._telefonos[i].numTelefono} (${this._telefonos[i].tipo})`;
        }
        return allTelefonos;
    }

    showAllMails(): string{
        let allMail: string = '';
        for (let i = 0; i < this._mails.length; i++) {
            allMail = `${allMail}\n\tMail ${i + 1}: ${this._mails[i].email} (${this._mails[i].tipo})`;
        }
        return allMail;
    }

    showPersonaInfo(): string{
        let personaInfo: string = `Información de ${this._nombre} ${this._apellido}:
        Nombre: ${this._nombre}
        Apellidos: ${this._apellido}
        Edad: ${this._edad}
        DNI: ${this._dni}
        Fecha de cumpleaños: ${this._cumpleaños}
        Color favorito: ${this._colorFav}
        Sexo: ${this._sexo}
        Dirección: ${this.showAllDirecciones}
        Mail: ${this.showAllMails}
        Teléfono: ${this.showAllTelefonos}
        Notas: ${this._notas}`;
        return personaInfo;
    }
}
