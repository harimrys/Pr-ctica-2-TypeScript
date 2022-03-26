"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;

class direccion {
    constructor(_calle, _num, _piso, _letra, _cp, _poblacion, _provincia){
        this._calle = _calle;
        this._num = _num;
        this._piso = _piso;
        this._letra = _letra;
        this._cp = _cp;
        this._poblacion = _poblacion;
        this._provincia = _provincia;
    }

    set calle(calle) {
        this._calle = calle;
    }
    set num(num) {
        this._num = num;
    }
    set piso(piso){
        this._piso = piso;
    }
    set letra(letra){
        this._letra = letra;
    }
    set cp(cp){
        this._cp = cp;
    }
    set poblacion(poblacion){
        this._poblacion = poblacion;
    }
    set provincia(provincia){
        this._provincia = provincia;
    }

    get calle(){
        return this._calle;
    }
    get num(){
        return this._num;
    }
    get piso(){
        return this._piso;
    }
    get letra(){
        return this._letra;
    }
    get cp(){
        return this._cp;
    }
    get poblacion(){
        return this._poblacion;
    }
    get provincia(){
        return this._provincia;
    }

    showDireccion (){
        let direccion = ` ${this._calle},${this._num}, ${this._piso}, ${this._letra} 
                        ${this._cp}, ${this._poblacion} - ${this._provincia}`;
        return direccion;
    }
}
exports.direccion = direccion;