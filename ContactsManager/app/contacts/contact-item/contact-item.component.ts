import {Component, Input, Output, EventEmitter} from 'angular2/core';
import { Contact } from '../contact';

@Component({
    selector: 'contact-card',
    templateUrl: 'app/contacts/contact-item/contact-item.component.html',
    styles: [`
        .contact-card {
            margin-top: 22px;
        }
    `]
})
export class ContactComponent {
    @Input() contact:Contact;
    @Output() delete = new EventEmitter();

    deleteContact(){
        this.delete.emit(this.contact);
    }
}
