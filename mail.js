"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mail = void 0;

class mail {
    constructor(_tipo, _email){
        this._tipo = _tipo;
        this._email = _email;
    }
    set tipo(tipo){
        this._tipo = tipo;
    }
    get tipo(){
        return this._tipo;
    }
    
    set email(email){
        this._email = email;
    }
    get email(){
        return this._email;
    }
}
exports.mail = mail;