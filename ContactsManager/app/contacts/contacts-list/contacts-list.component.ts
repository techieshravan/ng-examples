import {Component, OnInit} from '@angular/core';
import {Contact} from '../contact';
import {ContactComponent} from '../contact-item/contact-item.component';
import {ContactsService} from '../contacts.service';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
    moduleId: module.id,
    selector: 'contacts-list',
    templateUrl: 'contacts-list.component.html',
    styleUrls: ['contacts-list.component.css'],
    directives: [ContactComponent, MD_LIST_DIRECTIVES]
})
export class ContactsListComponent implements OnInit {

    contactsList: Contact[];
    selectedContact: Contact;

    constructor(private _contactsService: ContactsService) { }

    ngOnInit() {
        this._getContacts();
    }

    private _getContacts() {
        this._contactsService.getContacts().then(contacts => this.contactsList = contacts);
    }

    public onSelect(contact) {
        this.selectedContact = contact;
    }

    public onDelete(event){
        console.log(event);
    }
}