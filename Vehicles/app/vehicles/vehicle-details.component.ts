import {Component} from 'angular2/core';
import {Vehicle} from "./vehicle";

@Component({
    selector: 'vehicle-detail',
    templateUrl: 'app/vehicles/vehicle-detail.html',
    inputs: ['vehicle']
})
export class VehicleDetailComponent {
    public vehicle: Vehicle;
}