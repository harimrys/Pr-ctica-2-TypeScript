export class direccion {
constructor(
    private _calle: string,
    private _num: number,
    private _piso: number,
    private _letra: string,
    private _cp: number,
    private _poblacion: string,
    private _provincia: string
) {}

set calle(calle: string){
    this._calle = calle;
}
get calle(): string{
    return this._calle;
}

set num(num: number){
    this._num = num;
}
get num(): number{
    return this._num;
}

set piso(piso: number){
    this._piso = piso;
}
get piso(): number{
    return this._piso;
}

set letra(letra: string){
    this._letra = letra;
}
get letra(): string{
    return this._letra;
}

set cp(cp: number){
    this._cp = cp;
}
get cp(): number{
    return this._cp;
}

set poblacion(poblacion: string){
    this._poblacion = poblacion;
}
get poblacion(): string{
    return this._poblacion;
}

set provincia(provincia: string){
    this._provincia = provincia;
}
get provincia(): string{
    return this._provincia;
}

showDireccion(): string {
    let direccion: string =  `${this._calle}, ${this._num}, ${this._piso}, ${this._letra}
                ${this._cp}, ${this._poblacion} - ${this._provincia}`;
    return direccion;
 }
}







