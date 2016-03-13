import { Component, OnInit } from 'angular2/core';
import { Vehicle } from './vehicle';
import { VehiclesService } from './vehicles.service';
import { VehicleDetailComponent } from "./vehicle-details.component";

@Component({
    selector: 'vehicles-list',
    templateUrl: 'app/vehicles/vehicles-list.html',
    styleUrls: ['app/vehicles/vehicles-list.css'],
    directives: [VehicleDetailComponent]
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