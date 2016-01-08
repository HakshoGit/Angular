var app = angular.module("slack", []);
app.config([function($http) {
    $http.defaults.headers.common.Authorization = 'Token token=2654ccd286fb4250a7186d3e126f5b92';
}])