import {Component} from 'angular2/core';
import {CreateContactComponent} from "../create-contact/create-contact";
import {DisplayContactsComponent} from "../display-contacts/display-contacts";

@Component({
  selector: 'contacts-app',
  template: '<br/><create-contact></create-contact>',
  directives:[DisplayContactsComponent, CreateContactComponent]
})
export class AppComponent {

}
