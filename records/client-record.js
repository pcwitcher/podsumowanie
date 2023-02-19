const {ValidationError} = require("../utils/error");

class ClientRecord {
    constructor(obj) {
        const {id, name, email, nextContactAt, notes} = obj;

        //console.log(nextContactAt,  typeof nextConatctAt !== 'string'  );
        //console.log(id, !id, id !== 'string');

        if (!id || typeof id !== 'string') {
            throw new ValidationError('ID nie może byc puste i musi byc tekstem.');
        }

        if (!name || typeof name !== 'string' || name.length < 3) {
            throw new ValidationError('Imię musi byc tekstem o długości min. 3 znaków.');
        }

        if (!email || typeof email !== 'string' || email.indexOf('@') === -1) {
            throw new ValidationError('Email nieprawidłowy.');
        }

        if (typeof nextContactAt !== 'string' ) {
            throw new ValidationError('Data następnego kontaktu musi być tekstem');
        }
        if (typeof notes !== 'string') {
            throw new ValidationError('Notatki musza być  tekstem');
        }

        this.id = id;
        this.name = name;
        this.email = email;
        this.nextContactAt = nextContactAt;
        this.notes = notes;
    }
}

module.exports = {
    ClientRecord,
};
