import {Component} from 'angular2/core';
import {VehiclesListComponent} from "../vehicles-list/vehicles-list.component";

@Component({
    selector: 'vehicles-app',
    templateUrl: 'src/components/app/app.html',
    styles:[],
    directives: [VehiclesListComponent]
})
export class AppComponent {}