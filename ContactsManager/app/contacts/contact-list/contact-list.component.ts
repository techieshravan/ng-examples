import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Contact, ContactsService } from '../contacts';

@Component({
  moduleId: module.id,
  selector: 'contact-list',
  templateUrl: 'contact-list.component.html',
  styleUrls: ['contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contactList: Contact[];

  constructor (private _router: Router, private _contactsService: ContactsService) {
  }

  ngOnInit () {
    this._getContacts();
  }

  private _getContacts () {
    this._contactsService
      .getContacts()
      .then(contacts => this.contactList = contacts);
  }

  public gotoContact (contact: Contact) {
    console.log(contact);
    this._router.navigate(['/contacts', contact.id]);
  }
}