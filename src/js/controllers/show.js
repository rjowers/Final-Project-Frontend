

function ShowController ($scope, $http, SERVER, $state, $cookies, $rootScope) {
  $scope.info = $rootScope.shows[0];
  $scope.fullUrl = "http://image.tmdb.org/t/p/w650//" + $rootScope.shows[0].backdrop_path;
  console.log($scope.fullUrl)
}

ShowController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope'];

export default ShowController;


// make a div make that the background of the div then you could do
//box shadow inset and then u select all sides
