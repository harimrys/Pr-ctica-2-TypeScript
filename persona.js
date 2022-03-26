"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;

class persona{
    constructor(_nombre, _apellido, _edad, _dni, _cumpleaños, _colorFav, _sexo, _direcciones, _mails, _telefonos, _notas){
      this._nombre = _nombre;
      this._apellido = _apellido;
      this._edad = _edad;
      this._dni = _dni;
      this._cumpleaños = _cumpleaños;
      this._colorFav = _colorFav;
      this._sexo = _sexo;
      this._direcciones = _direcciones;
      this._mails = _mails;
      this._telefonos = _telefonos;
      this._notas = _notas;  
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
    get apellido(){
        return this._apellido;
    }

    set edad(edad){
        this._edad = edad;
    }
    get edad(){
        return this._edad;
    }

    set dni(dni){
        this._dni = dni;
    }
    get dni(){
        return this._dni;
    }

    set cumpleaños(cumpleaños){
        this._cumpleaños = cumpleaños;
    }
    get cumpleaños(){
        return this._cumpleaños;
    }

    set colorFav(colorFav){
        this._colorFav = colorFav;
    }
    get colorFav(){
        return this._colorFav;
    }

    set sexo(sexo){
        this._sexo = sexo;
    }
    get sexo(){
        return this._sexo;
    }

    set direcciones(direcciones){
        this._direcciones = direcciones;
    }
    get direcciones(){
        return this.direcciones;
    }

    set mails(mails){
        this._mails = mails;
    }
    get mails(){
        return this._mails;
    }

    set telefonos(telefonos){
        this._telefonos = telefonos;
    }
    get telefonos(){
        return this._telefonos;
    }

    set notas(notas){
        this._notas = notas;
    }
    get notas(){
        return this._notas;
    }

    addDireccion(newDireccion){
        this._direcciones.push(newDireccion);
    }
    setDireccion(newDireccion){
        this._direcciones = [newDireccion];
    }

    addMail(newMail){
        this._mails.push(newMail);
    }
    setMail(newMail){
        this._mails = [newMail];
    }

    addTelefono(newTelefono){
        this._telefonos.push(newTelefono);
    }
    setTelefono(newTelefono){
        this._telefonos = [newTelefono];
    }

    getFormaCumpleaños(){
        let fecha = this._cumpleaños;
        let formaCumple = `${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`;
        return formaCumple;
    }

    showAllDirecciones(){
        let allDirecciones = '';
        for (let i = 0; i < this._direcciones.length; i++){
            allDirecciones = `${allDirecciones}\n\tDirección ${i + 1}: ${this._direcciones[i].showDireccion()}`;
        }
        return allDirecciones;    
    }

    showAllTelefonos(){
        let allTelefonos = '';
        for (let i = 0; i < this._telefonos.length; i++) {
            allTelefonos = `${allTelefonos}\n\tTeléfono ${i + 1}: ${this._telefonos[i].numTelefono} (${this._telefonos[i].tipo})`;
        }
        return allTelefonos;
    }

    showAllMails() {
        let allMail = '';
        for (let i = 0; i < this._mails.length; i++) {
            allMail = `${allMail}\n\tMail ${i + 1}: ${this._mails[i].email} (${this._mails[i].tipo})`;
        }
        return allMail;
    }
    
    showPersonaInfo(){
        let personaInfo = `Información de ${this._nombre} ${this._apellido}:
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
exports.persona = persona;