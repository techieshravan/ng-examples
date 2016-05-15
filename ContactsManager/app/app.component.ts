import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {ContactsListComponent, CreateContactComponent, ContactsService} from './contacts/contacts';
import {Logger} from './logger/logger.service';
import {MdToolbar} from '@angular2-material/toolbar';

@Component({
    moduleId: module.id,
    selector: 'contacts-app',
    templateUrl: 'app.component.html',
    directives: [ROUTER_DIRECTIVES, MdToolbar],
    providers: [ROUTER_PROVIDERS, ContactsService, Logger]
})
@RouteConfig([
    {
        path: '/contacts',
        name: 'Contacts',
        component: ContactsListComponent,
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
        {name: 'Contacts', link: ['Contacts']}
    ];
}