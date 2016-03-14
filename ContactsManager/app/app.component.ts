import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { CreateContactComponent } from './contacts/create-contact.component';
import { DisplayContactsComponent } from './contacts/display-contacts.component';
import { ContactsService } from './contacts/contacts.service';
import { Logger } from './logger/logger.service';

@Component({
    selector: 'contacts-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, ContactsService, Logger]
})
@RouteConfig([
    {
        path: '/contacts',
        name: 'Contacts',
        component: DisplayContactsComponent,
        useAsDefault: true
    },
    {
        path: '/create-contact',
        name: 'CreateContact',
        component: CreateContactComponent
    }
])
export class AppComponent {
    public menuItems = [
        { name: 'Contacts', link: ['Contacts'] }
    ];
}
