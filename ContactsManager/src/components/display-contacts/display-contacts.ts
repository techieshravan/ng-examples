import {Component} from "angular2/core";
import {Contact} from "../../models/contact";
import {ContactsList} from "../../mock-contacts";

@Component({
    selector: 'display-contacts',
    templateUrl:'/src/components/display-contacts/display-contacts.html'
})
export class DisplayContactsComponent {
    contactsList: Contact[] = ContactsList;
}