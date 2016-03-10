import { Injectable } from 'angular2/core';
import { ContactsList } from '../mock-contacts';
import { Contact } from '../models/contact';
import { Logger } from './logger.service';

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