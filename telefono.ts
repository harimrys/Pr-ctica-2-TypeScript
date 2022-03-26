export class telefono{
    constructor(private _tipo: string, private _numTelefono: number){}

    set tipo(tipo:string){
        this._tipo = tipo;
    }
    get tipo(): string{
        return this._tipo;
    }

    set numTelefono(numTelefono: number){
        this._numTelefono = numTelefono;
    }
    get numTelefono(): number{
        return this._numTelefono;
    }
}