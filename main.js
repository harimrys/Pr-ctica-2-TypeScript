"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persona_1 = require("./agenda/persona");
const direccion_1 = require("./agenda/direccion");
const mail_1 = require("./agenda/mail");
const telefono_1 = require("./agenda/telefono");

function NewAgenda(){
    let agenda = [];
    const direccionPersona1 = new direccion_1.direccion('Luis Velasco', 57, 2,'A', 35115, 'Agüimes','Las Palmas');
    const persona1 = new persona_1.persona('María', 'Perez Hernandez', 20, '44256574G', new Date(2002,1,20), 'Negro', 'Mujer', [direccionPersona1], [new mail_1.mail('Personal', 'maria1234@gmail.com')], [new telefono_1.telefono('Personal', 624789526)], 'Me llamo Maria');

    const direccionPersona2 = new direccion_1.direccion('Portugal', 50, 1, 'B', 35010, 'Las Palmas', 'Las Palmas' );
    const persona2 = new persona_1.persona('Juan', 'Ramirez Lopez', 50, '48756987M', new Date(1972,12,10), 'Azul', 'Hombre', [direccionPersona2], [new mail_1.mail('Trabajo', 'juanlokito@gmail.com')], [new telefono_1.telefono('Casa', 928745863)], 'Me gusta el refresco');

    const direccionPersona3 = new direccion_1.direccion('Tenderete', 25, 4, 'C', 35300, 'Santa Brígida', 'Las Palmas');
    const persona3 = new persona_1.persona('Chanita', 'Martin Vega', 29, '44985632L', new Date(1993,2,10), 'Verde', 'Mujer', [direccionPersona3], [new mail_1.mail('Personal', 'chanita_1234@gmail.com')], [new telefono_1.telefono('Trabajo', 689524571)], 'Holita a todos');
    
    agenda.push(persona1);
    agenda.push(persona2);
    agenda.push(persona3);
    return agenda;
}

function showAgenda(agenda){
    for (const persona of agenda){
        console.log(persona.showPersonaInfo());
    }
}
function addNewPersonaInfo(numDni, newDireccion, newMail, newTelefono){
    for (const persona of agenda){
        if (persona.dni === numDni){
            persona.addDireccion(newDireccion);
            persona.addMail(newMail);
            persona.addTelefono(newTelefono);
        }
    }
}

let agenda = NewAgenda();
showAgenda(agenda);
const dniChanita = '44985632L';
const newDireccionChanita = new direccion_1.direccion('Paseo Nuevo', 24, 2, 'A', 35308, 'Tafira', 'Las Palmas');
const newMailChanita = new mail_1.mail('Personal', 'chanitalamejor@gmail.com');
const newTelefonoChanita = new telefono_1.telefono('Personal', 687426859);

addNewPersonaInfo(dniChanita, newDireccionChanita, newMailChanita, newTelefonoChanita);

showAgenda(agenda);


