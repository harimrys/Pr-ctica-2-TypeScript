export class mail{
    constructor (private _tipo: string, private _email: string){}
    set tipo(tipo: string){
        this._tipo = tipo;
    }
    get tipo(): string {
        return this._tipo;
    }

    set email(email: string){
        this._email = email;
    }
    get email(): string {
        return this._email;
    }
}
