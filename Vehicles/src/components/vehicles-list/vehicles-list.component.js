System.register(['angular2/core', '../../services/vehicles.service', "../vehicle-detail/vehicle-details"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, vehicles_service_1, vehicle_details_1;
    var VehiclesListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (vehicles_service_1_1) {
                vehicles_service_1 = vehicles_service_1_1;
            },
            function (vehicle_details_1_1) {
                vehicle_details_1 = vehicle_details_1_1;
            }],
        execute: function() {
            VehiclesListComponent = (function () {
                function VehiclesListComponent(_vehiclesService) {
                    this._vehiclesService = _vehiclesService;
                    this.title = 'Vehicles List';
                }
                VehiclesListComponent.prototype.ngOnInit = function () {
                    this.getVehicles();
                };
                VehiclesListComponent.prototype.getVehicles = function () {
                    var _this = this;
                    this._vehiclesService.getVehicles().then(function (vehicles) { return _this.vehicles = vehicles; });
                };
                VehiclesListComponent.prototype.onSelect = function (vehicle) {
                    this.selectedVehicle = vehicle;
                };
                VehiclesListComponent = __decorate([
                    core_1.Component({
                        selector: 'vehicles-list',
                        templateUrl: 'src/components/vehicles-list/vehicles-list.html',
                        styles: [],
                        directives: [vehicle_details_1.VehicleDetailComponent],
                        providers: [vehicles_service_1.VehiclesService]
                    }), 
                    __metadata('design:paramtypes', [vehicles_service_1.VehiclesService])
                ], VehiclesListComponent);
                return VehiclesListComponent;
            })();
            exports_1("VehiclesListComponent", VehiclesListComponent);
        }
    }
});
