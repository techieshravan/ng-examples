var jsonDateConverterExample = angular.module('jsonDateConverterExample', [])
  .controller('JsonDateController', ['$scope', function($scope) {
    $scope.sampleJsonDate = '\/Date(1433913313004-0800)\/';
}]);

jsonDateConverterExample.filter('jsonDate', ['$filter', function ($filter) {
    return function (input, format) {
        return (input) ? $filter('date')(parseInt(input.substr(6)), format) : '';
    };
}]);