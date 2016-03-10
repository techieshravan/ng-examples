import { Injectable } from 'angular2/core';
import { ContactsList } from '../mock-contacts';
import { Contact } from '../models/contact';

@Injectable()
export class ContactsService {

    getContacts() {
        return Promise.resolve(ContactsList);
    }

    getContactsSlowly() {
        return new Promise<Contact[]>(resolve => setTimeout(() => resolve(ContactsList), 2000));
    }

    addContact(_contact: Contact) {
        if (_contact) {
            ContactsList.push(_contact);
        }
    }

}