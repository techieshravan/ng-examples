import { Component, OnInit } from 'angular2/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
    selector: 'display-contacts',
    templateUrl: 'app/contacts/display-contacts/display-contacts.component.html',
    styleUrls: ['app/contacts/display-contacts/display-contacts.component.css']
})
export class DisplayContactsComponent implements OnInit {

    contactsList: Contact[];

    constructor(private _contactsService: ContactsService) { }

    ngOnInit() {
        this._getContacts();
    }

    private _getContacts() {
        this._contactsService.getContacts().then(contacts => this.contactsList = contacts);
    }
}
