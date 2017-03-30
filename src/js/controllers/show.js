

function ShowController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {
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
    $scope.modalToggle = "is-active";
  }

  $scope.close = function (){
    $scope.modalToggle = "";
  }

  $scope.enter = function (data) {
    console.log(data)
    $scope.modalToggle = "";
    //var url = `${SERVER}/userShows`;
    // data.text
    // data.rating

    var array = data.rating.split(" ")
    var ratingNumber = parseInt(array[0])
    // var review = {
    //   text: data.text,
    //   rating: ratingNumber
    // }

    var showInfo = {
      showId: $cookies.get('clickedPhoto'),
      showName: $rootScope.shows[chosenShow].name,
      seenIt: true
    }


    AccountService.addReview(showInfo).then(resp => {

        }).catch(error => {
            console.log(error);
      });
  };

}

ShowController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService'];

export default ShowController;


// make a div make that the background of the div then you could do
//box shadow inset and then u select all sides
