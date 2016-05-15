import {Injectable} from '@angular/core';
import {ContactsList} from './mock-contacts';
import {Contact} from './contact';
import {Logger} from '../logger/logger.service';

@Injectable()
export class ContactsService {

    constructor(private _logger: Logger) {  }

    getContacts() {
        this._logger.log('Getting contacts ...');
        return Promise.resolve(ContactsList);
    }

    getContactsSlowly() {
        this._logger.log('Getting contacts slowly ...');
        return new Promise<Contact[]>(resolve => setTimeout(() => resolve(ContactsList), 2000));
    }

    addContact(_contact: Contact) {
        if (_contact) {
            this._logger.log('Adding a contact ...');
            ContactsList.push(_contact);
        }
    }
}
