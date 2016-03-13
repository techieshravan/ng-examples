import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { VehiclesService } from './vehicles/vehicles.service';
import { VehiclesListComponent } from "./vehicles/vehicles-list.component";

@Component({
    selector: 'vehicles-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, VehiclesService]
})
@RouteConfig([
    {
        path: '/vehicles',
        name: 'VehiclesList',
        component: VehiclesListComponent,
        useAsDefault: true
    }
])
export class AppComponent { }