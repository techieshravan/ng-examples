import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder, Validators } from 'angular2/common';
import { ContactsService } from '../../services/contacts.service';

@Component({
    selector: 'create-contact',
    templateUrl: '/src/components/create-contact/create-contact.html'
})
export class CreateContactComponent {

    private contactForm: ControlGroup;

    constructor(fb: FormBuilder, private _contactsService: ContactsService) {

        this.contactForm = fb.group({
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
