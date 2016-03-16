import { Component, Input } from 'angular2/core';
import { Contact } from '../contact';

@Component({
    selector: 'contact-card',
    templateUrl: 'app/contacts/contact-card/contact-card.component.html',
    styles: [`
        .mdl-card img {
            width: 100%;
        }
    `]
})
export class ContactCarComponent {
    @Input() contact: Contact;    
}