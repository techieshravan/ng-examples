import {Injectable} from 'angular2/core';
import {VehiclesList} from './mock-vehicles';

@Injectable()
export class VehiclesService {
    getVehicles() {
        return Promise.resolve(VehiclesList);
    }
}