const app = angular.module('DisneyApp', []);

app.controller('DisneyController', ['$http', function($http){
    // this.hello = 'Hi';
    this.hideEdit = true;

    this.addResort = ()=>{
        $http({
            method: 'POST',
            url: '/resorts',
            data: {
                title: this.newTitle,
                url: this.newUrl,
                img: this.newImg,
                description: this.newDescription
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

    this.deleteResort = (resort) => {
      $http({
        method: 'DELETE',
        url: '/resorts/' + resort._id
      }).then(repsonse => {
        this.getResorts();
      }, error => {
        console.log(error);
      })
    };

    this.editResort = (resort) => {
      $http({
        method: 'PUT',
        url: '/resorts/' + resort._id,
        data: {
          title: this.updatedTitle,
          url: this.updatedUrl,
          img: this.updatedImg,
          description: this.updatedDescription
        }
      }).then(response => {
        this.getResorts();
      }, error => {
        console.log(error);
      })
    };

    this.toggleEdit= () => {
        this.hideEdit = !this.hideEdit;
      }
    this.getResorts();
}]);
