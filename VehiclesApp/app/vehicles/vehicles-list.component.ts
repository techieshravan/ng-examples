import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Vehicle } from './vehicle';
import { VehiclesService } from './vehicles.service';

@Component({
    selector: 'vehicles-list',
    templateUrl: 'app/vehicles/vehicles-list.component.html',
    styleUrls: ['app/vehicles/vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {

    public title = 'Vehicles List';
    public vehicles: Vehicle[];

    constructor(private _router: Router, private _vehiclesService: VehiclesService) { }

    ngOnInit() {
        this.getVehicles();
    }

    getVehicles() {
        this._vehiclesService.getVehicles().then(vehicles => this.vehicles = vehicles);
    }

    onSelect(selectedVehicle: Vehicle) {
        this._router.navigate(['VehicleDetail', { id: selectedVehicle.id }]);
    }
}