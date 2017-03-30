

function ShowController ($scope, $http, SERVER, $state, $cookies, $rootScope) {
  function getMovie () {
    for(var count = 0; count < $rootScope.shows.length; count++){

      if($rootScope.shows[count].id == $cookies.get('clickedPhoto')){
        return count;
      }
    }
  }
  var chosenShow = getMovie();

  $scope.info = $rootScope.shows[chosenShow];
  $scope.fullUrl = "http://image.tmdb.org/t/p/w650//" + $rootScope.shows[chosenShow].backdrop_path;
  //console.log($scope.fullUrl)


  $scope.modal = function (){
    $scope.test = "is-active";
  }

  $scope.close = function (){
    $scope.test = "";
  }
}

ShowController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope'];

export default ShowController;


// make a div make that the background of the div then you could do
//box shadow inset and then u select all sides
