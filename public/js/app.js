const app = angular.module('DisneyApp', []);

app.controller('DisneyController', ['$http', function($http){
    this.hello = 'Hi';

    this.addResort = ()=>{
        $http({
            method: 'POST',
            url: '/resorts',
            data: {
                title: this.newTitle,
                url: this.newUrl,
                img: this.newImg
            }
        }).then(response=>{
            console.log(response);
        }, error=>{
            console.log(error);
        })
    }
}]);
