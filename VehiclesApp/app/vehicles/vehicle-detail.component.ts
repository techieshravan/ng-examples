import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';
import { Vehicle } from './vehicle';
import { VehiclesService } from './vehicles.service';

@Component({
    selector: 'vehicle-detail',
    templateUrl: 'app/vehicles/vehicle-detail.component.html'
})
export class VehicleDetailComponent {
    
    public vehicle: Vehicle;
    
    constructor(private _router: Router, 
                private _routeParams: RouteParams, 
                private _vehiclesService: VehiclesService) { }

    ngOnInit() {
        this._getVehicle();
    }

    private _getVehicle() {
        let id = +this._routeParams.get('id');
        this._vehiclesService.getVehicle(id).then(vehicle => this.vehicle = vehicle);
    }
}