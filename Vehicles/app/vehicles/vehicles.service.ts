import { Injectable } from 'angular2/core';
import { VehiclesList } from './mock-vehicles';

@Injectable()
export class VehiclesService {

    getVehicles() {
        return Promise.resolve(VehiclesList);
    }

    getVehicle(id: number) {
        let vehicle = VehiclesList.filter(x => x.id == id);
        return Promise.resolve(vehicle[0]);
    }
}