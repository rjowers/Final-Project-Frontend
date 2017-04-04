

function ShowController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService, $stateParams) {
  function getShow () {
    for(var count = 0; count < $rootScope.shows.length; count++){

      if($rootScope.shows[count].id == $stateParams.showId){
        return count;
      }
    }
  }
  var chosenShow = getShow();

  $scope.info = $rootScope.shows[chosenShow];
  $scope.fullUrl = "http://image.tmdb.org/t/p/w650//" + $rootScope.shows[chosenShow].backdrop_path;
  //console.log($scope.fullUrl)

  $http.get(`${SERVER}/showreviews/${$stateParams.showId}`).then(resp => {
      console.log(resp.data)
      $scope.test2 = resp.data;
    });

  // $http.get(`${SERVER}/showreviews/${$cookies.get('clickedPhoto')}`).then(resp => {
  //     console.log(resp.data)
  //     //console.log(resp.data[0].review)
  //     $scope.test2 = resp.data;
  //   });

  //console.log($scope.test2)


  $scope.modal = function (){
    $scope.modalToggle = "is-active";
  }

  $scope.close = function (){
    $scope.modalToggle = "";
  }

  $scope.enter = function (data) {
    //console.log(data)
    $scope.modalToggle = "";
    //var url = `${SERVER}/userShows`;
    // data.text
    // data.rating
    console.log($stateParams.showId)
    var array = data.rating.split(" ")
    var ratingNumber = parseInt(array[0])
    var reviewInfo = {
      review: data.text,
      ranking: ratingNumber,
      showId: $stateParams.showId,
      showName: $rootScope.shows[chosenShow].name,
      seenIt: true,
      posterPath: $rootScope.shows[chosenShow].poster_path,
      backgroundPath: $rootScope.shows[chosenShow].backdrop_path,
      showDescription: $rootScope.shows[chosenShow].overview
    }

    AccountService.addReview(reviewInfo).then(resp => {
        $scope.test2.push(resp.data);
        }).catch(error => {
            console.log(error);

      }).then(

      // $http.get(`${SERVER}/showreviews/${$stateParams.showId}`).then(resp => {
      //     console.log(resp.data)
      //     $scope.test2 = resp.data;
      //     console.log(resp.data)
      //   })

      );

      })

  };
}

ShowController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$stateParams'];

export default ShowController;


// make a div make that the background of the div then you could do
//box shadow inset and then u select all sides
