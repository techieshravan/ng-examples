import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { CreateContactComponent } from "../create-contact/create-contact.component";
import { DisplayContactsComponent } from "../display-contacts/display-contacts";

@Component({
    selector: 'contacts-app',
    templateUrl: './src/components/app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
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
        {name: 'Contacts', link: ['Contacts']}
    ];
}