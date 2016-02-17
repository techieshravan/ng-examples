import {Component} from 'angular2/core';
import {Vehicle} from "../../models/vehicle";

@Component({
    selector: 'vehicle-detail',
    templateUrl: 'src/components/vehicle-detail/vehicle-detail.html',
    inputs: ['vehicle']
})
export class VehicleDetailComponent {
    public vehicle: Vehicle;
}