import { Component, OnInit } from 'angular2/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'display-contacts',
    templateUrl: 'src/components/display-contacts/display-contacts.html',
    styleUrls: ['src/components/display-contacts/display-contacts.css']
})
export class DisplayContactsComponent implements OnInit {

    contactsList: Contact[];

    constructor(private _contactsService: ContactsService) { }

    getContacts() {
        this._contactsService.getContacts().then(contacts => this.contactsList = contacts);
    }

    ngOnInit() {
        this.getContacts();
    }
}
