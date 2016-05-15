import {Component} from '@angular/core';
import {ControlGroup, FormBuilder, Validators} from '@angular/common';
import {ContactsService} from '../contacts.service';

@Component({
    moduleId: module.id,
    selector: 'create-contact',
    templateUrl: 'create-contact.component.html'
})
export class CreateContactComponent {

    contactForm:ControlGroup;

    constructor(private _fb:FormBuilder, private _contactsService:ContactsService) {

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
