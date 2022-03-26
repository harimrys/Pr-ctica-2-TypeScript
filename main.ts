import {persona} from './agenda/persona';
import {direccion} from './agenda/direccion';
import {mail} from './agenda/mail';
import {telefono} from './agenda/telefono';

function NewAgenda(): Array<persona> {
    let agenda: Array<persona> = [];

    const direccionPersona1: direccion = new direccion(
        'Luis Velasco',
        57,
        2,
        'A',
        35115,
        'Agüimes',
        'Las Palmas'
    );
    const persona1: persona = new persona(
        'María',
        'Perez Hernandez',
        20,
        '44256574G',
        new Date(2002,1,20),
        'Negro',
        'Mujer',
        [direccionPersona1],
        [new mail('Personal', 'maria1234@gmail.com')],
        [new telefono('Personal', 624789526)],
        'Me llamo Maria');

    const direccionPersona2: direccion = new direccion(
      'Portugal',
      50,
      2,
      'A',
      35010,
      'Las Palmas',
      'Las Palmas'
    );
    const persona2: persona = new persona(
        'Juan',
        'Ramirez Lopez',
        50,
        '48756987M',
        new Date(1972,12,10),
        'Azul',
        'Hombre',
        [direccionPersona2],
        [new mail('Trabajo', 'juanlokito@gmail.com')],
        [new telefono('Casa', 928745863)],
        'Me gusta el refresco');

    const direccionPersona3: direccion = new direccion(
        'Tenderete',
        25,
        4,
        'C',
        35300,
        'Santa Brígida',
        'Las Palmas'
    );
    const persona3: persona = new persona(
        'Chanita',
        'Martin Vega',
        29,
        '44985632L',
        new Date(1993,2,10),
        'Verde',
        'Mujer',
        [direccionPersona3],
        [new mail('Personal', 'chanita_1234@gmail.com')],
        [new telefono('Trabajo', 689524571)],
        'Holita a todos');

    agenda.push(persona1);
    agenda.push(persona2);
    agenda.push(persona3);
    return agenda;
}   

function showAgenda(agenda: Array<persona>): void {
    for(const persona of agenda){
        console.log(persona.showPersonaInfo());
    }
}

function addNewPersonaInfo(
    numDni: string,
    newDireccion: direccion,
    newMail: mail,
    newTelefono: telefono
): void{
    for(const persona of agenda){
        if (persona.dni === numDni){
            persona.addDireccion(newDireccion);
            persona.addMail(newMail);
            persona.addTelefono(newTelefono);
        }
    }
}

let agenda = NewAgenda();
showAgenda(agenda);

const dniChanita : string = '44985632L';
const newDireccionChanita : direccion =  new direccion(
    'Paseo Nuevo', 
    24, 
    2, 
    'A',
    35308, 
    'Tafira', 
    'Las Palmas');
const newMailChanita: mail = new mail(
    'Personal', 
    'chanitalamejor@gmail.com');
const newTelefonoChanita: telefono = new telefono(
    'Personal', 
    687426859);
    
addNewPersonaInfo(dniChanita, newDireccionChanita, newMailChanita, newTelefonoChanita);

showAgenda(agenda);
