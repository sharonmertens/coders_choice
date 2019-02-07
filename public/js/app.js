const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function ($http) {
  const controller = this;

  // to hide extra fields
  this.indexOfEditFormToShow = -1;
  
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

  // function to delete Place
  this.deletePlace = function (place) {
    $http({
      method: 'DELETE',
      url: '/places/' + place._id
    }).then(
      function(response) {
        controller.getPlaces();
      },
      function(error) {
        console.log(error);
      }
    );
  }

  // function to edit Place
  this.editPlace = function (place) {
    $http({
      method: 'PUT',
      url: '/places/' + place._id,
      data: {
        city: this.updatedCity,
        country: this.updatedCountry,
        image: this.updatedImage,
        visited: this.updatedVisited
      }
    }).then(
      function(response) {
        controller.getPlaces();
      },
      function (error) {
        console.log(error);
      }
    );
  }


  this.getPlaces()
}]); // closes controller
