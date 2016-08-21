import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact';

@Component({
  moduleId: module.id,
  selector: 'contact-item',
  templateUrl: 'contact-item.component.html',
  styles: [`
        .contact-card {
            margin-top: 22px;
        }
    `]
})
export class ContactComponent {
  @Input() contact: Contact;
  @Output() delete = new EventEmitter();

  deleteContact () {
    this.delete.emit(this.contact);
  }
}