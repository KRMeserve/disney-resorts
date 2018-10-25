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
            this.getResorts();
        }, error=>{
            console.log(error);
        })
    };

    this.getResorts = ()=>{
        $http({
            method: 'GET',
            url: '/resorts'
        }).then(response=>{
            console.log(response.data);
            this.resorts = response.data
        }, error=>{
            console.log(error);
        })
    };
    this.getResorts();
}]);
