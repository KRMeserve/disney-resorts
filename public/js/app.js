const app = angular.module('DisneyApp', []);

app.controller('DisneyController', ['$http', function($http){
    this.hello = 'Hi';
}]);
