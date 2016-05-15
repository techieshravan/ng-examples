import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MdButton} from '@angular2-material/button';
import {Contact} from '../contact';

@Component({
    moduleId: module.id,
    selector: 'contact-item',
    templateUrl: 'contact-item.component.html',
    styles: [`
        .contact-card {
            margin-top: 22px;
        }
    `],
    directives: [MdButton]
})
export class ContactComponent {
    @Input() contact: Contact;
    @Output() delete = new EventEmitter();

    deleteContact() {
        this.delete.emit(this.contact);
    }
}