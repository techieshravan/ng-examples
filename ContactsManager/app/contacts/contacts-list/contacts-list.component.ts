import { Component, OnInit } from 'angular2/core';
import { Contact } from '../contact';
import { ContactComponent } from '../contact-item/contact-item.component';
import { ContactsService } from '../contacts.service';

@Component({
    selector: 'contacts-list',
    templateUrl: 'app/contacts/contacts-list/contacts-list.component.html',
    styleUrls: ['app/contacts/contacts-list/contacts-list.component.css'],
    directives: [ContactComponent]
})
export class ContactsListComponent implements OnInit {

    contactsList: Contact[];

    constructor(private _contactsService: ContactsService) { }

    ngOnInit() {
        this._getContacts();
    }

    private _getContacts() {
        this._contactsService.getContacts().then(contacts => this.contactsList = contacts);
    }
}
