import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Contact, ContactsService } from '../contacts';

@Component({
  moduleId: module.id,
  selector: 'contact-detail',
  templateUrl: 'contact-detail.component.html',
  styleUrls: ['contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  selectedContact: Contact;

  constructor (private _route: ActivatedRoute, private _contactsService: ContactsService) {
  }

  ngOnInit () {
    this._route.params.forEach((params: Params) => {

      if (params['id'] !== undefined) {

        let id = +params['id'];

        // this._contactsService
        //   .getContactDetail(id)
        //   .then(contact => this.selectedContact = contact);


        this._contactsService
          .getContactDetail(id)
          .then(contact => { console.log(contact); return this.selectedContact = contact; });
      }

    });
  }

  goBack () {
    window.history.back();
  }
}