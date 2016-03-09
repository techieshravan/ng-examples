import {Component} from "angular2/core";
import {Contact} from "../../models/contact";
import {ContactsList} from "../../mock-contacts";

@Component({
    selector: 'display-contacts',
    templateUrl:'/src/components/display-contacts/display-contacts.html',
    styles: [`
        .mdl-card {
            width: 320px;
            height: 320px;
        }


        .mdl-card > .mdl-card__title {
            background: #FF5252;
            color: #fff;
            /*background: url('./images/image_card.jpg') bottom right 15% no-repeat #46B6AC;*/
        }
    `]
})
export class DisplayContactsComponent {
    contactsList: Contact[] = ContactsList;
}