const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function ($http) {
  const controller = this;
  this.createPlace = function () {
    $http({
      method: 'POST',
      url: '/places',
      data: {
        city: this.city,
        country: this.country,
        image: this.image,
        visited: this.visited
      }
    }).then(function (response) {
      controller.getPlaces()
    }, function () {
      console.log('error');
    })
  }
  // function to get all places
  this.getPlaces = function () {
    $http({
      method: 'GET',
      url: '/places',
    }).then(function (response) {
      console.log(response.data);
      controller.places = response.data
    }, function () {
      console.log('error');
    })
  }

  // function to toggle
  this.togglePlaceVisited = function (place) {
    let newVisitedValue;
    if(place.visited === true ) {
      newVisitedValue = false;
    } else {
      newVisitedValue = true;
    }

    $http({
      method: 'PUT',
      url: '/places/' + place._id,
      data: {
        city: place.city,
        country: place.country,
        image: place.image,
        visited: newVisitedValue
      }
    }).then(function(response){
      controller.getPlaces();
    }, function(){
      console.log(error);
    });
  }


  this.getPlaces()
}]); // closes controller
