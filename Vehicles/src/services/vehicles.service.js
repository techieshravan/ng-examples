System.register(['angular2/core', './mock-vehicles'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, mock_vehicles_1;
    var VehiclesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (mock_vehicles_1_1) {
                mock_vehicles_1 = mock_vehicles_1_1;
            }],
        execute: function() {
            VehiclesService = (function () {
                function VehiclesService() {
                }
                VehiclesService.prototype.getVehicles = function () {
                    return Promise.resolve(mock_vehicles_1.VehiclesList);
                };
                VehiclesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], VehiclesService);
                return VehiclesService;
            })();
            exports_1("VehiclesService", VehiclesService);
        }
    }
});
