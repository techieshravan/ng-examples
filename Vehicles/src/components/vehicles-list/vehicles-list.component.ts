import {Component} from 'angular2/core';
import {Vehicle} from '../../models/vehicle';
import {VehiclesService} from '../../services/vehicles.service';
import {VehicleDetailComponent} from "../vehicle-detail/vehicle-details";
import {OnInit} from 'angular2/core';


@Component({
    selector: 'vehicles-list',
    templateUrl: 'src/components/vehicles-list/vehicles-list.html',
    styles:[],
    directives: [VehicleDetailComponent],
    providers:[VehiclesService]
})
export class VehiclesListComponent {

    public title = 'Vehicles List';
    public vehicles: Vehicle[];
    public selectedVehicle: Vehicle;

    constructor(private _vehiclesService: VehiclesService) { }

    ngOnInit() {
        this.getVehicles();
    }

    getVehicles() {
        this._vehiclesService.getVehicles().then(vehicles => this.vehicles = vehicles);
    }

    onSelect(vehicle) {
        this.selectedVehicle = vehicle;
    }
}