"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;

class telefono{
    constructor(_tipo, _numTelefono){
        this._tipo = _tipo;
        this._numTelefono = _numTelefono;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }
    get tipo(){
        return this._tipo;
    }
    
    set numTelefono(numTelefono){
        this._numTelefono = numTelefono;
    }
    get numTelefono(){
        return this._numTelefono;
    }
}
exports.telefono = telefono;