import { Component } from '@angular/core';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  moduleId: module.id,
  selector: 'add-contact',
  templateUrl: 'add-contact.component.html'
})
export class AddContactComponent {

  model:Contact = new Contact();

  constructor (private _contactsService: ContactsService) {
  }

  onSubmit() {
    this._contactsService.save(this.model);
  }
}
