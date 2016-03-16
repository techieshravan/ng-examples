import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { ContactsService } from '../contacts.service';

@Component({
    selector: 'create-contact',
    templateUrl: 'app/contacts/create-contact/create-contact.component.html'
})
export class CreateContactComponent {

    contactForm: ControlGroup;

    constructor(private _fb: FormBuilder, private _contactsService: ContactsService) {

        this.contactForm = _fb.group({
            name: ['', Validators.required],
            address: ['', Validators.required],
            city: [''],
            state: [''],
            zip: [''],
            email: [''],
            twitter: ['']
        });
    }

    save(formValue) {
        this._contactsService.addContact(formValue);
    }
}
