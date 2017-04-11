import { token } from "../token";

function ShowController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService, $stateParams, $window) {
  $scope.info = null;

  function init () {
    $http.get(`https://api.themoviedb.org/3/tv/${$stateParams.showId}?api_key=${token}&language=en-US`).then(resp => {
      // myData = resp.data;
      $scope.info = resp.data
      let fullUrl =  "http://image.tmdb.org/t/p/w650" + $scope.info.backdrop_path;
      $scope.fullUrl = `url("${fullUrl}")`;
      console.log(resp.data.backdrop_path);
      // console.log(resp.data)
      // console.log(myData)
      // myData.muff = 0;

    });
  }

  init();


  //console.log($scope.info)
  //console.log($scope.info)
  //setTimeout(function(){ console.log($scope.info); }, 3000);
  // function getShow () {
  //   for(var count = 0; count < $rootScope.shows.length; count++){
  //
  //     if($rootScope.shows[count].id == $stateParams.showId){
  //       return count;
  //     }
  //   }
  //   $http.get(`https://api.themoviedb.org/3/tv/${$stateParams.showId}?api_key=${token}&language=en-US`).then(resp => {
  //       $rootScope.shows.push(resp.data);
  //       console.log($rootScope.shows)
  //     });
  //     return 20;
  //   //run search to tmdb add to rootScope
  // }
//  var chosenShow = getShow();
  // console.log(chosenShow)
  // console.log($rootScope.shows[20])
  // console.log($rootScope.shows)
  // $scope.info = $rootScope.shows[chosenShow];
  //$scope.fullUrl = "http://image.tmdb.org/t/p/w650//" + $scope.info.backdrop_path;
  //console.log($scope.fullUrl)

  //$scope.fullUrl = "http://image.tmdb.org/t/p/w650//h1qyblc5p9G3ZWIVK8ZrkpxcXgO.jpg"

  $http.get(`${SERVER}/showreviews/${$stateParams.showId}`).then(resp => {
      console.log(resp.data, "init data")
      $scope.test2 = resp.data;
      //////////////////////////////////////////////
      for(var count = 0; count < $scope.test2.length; count++){
        //console.log($scope.UserReviews[count].ranking)
        var length = $scope.test2[count].ranking;
        $scope.test2[count].ranking = [];
        for(var count2 = 0; count2 < length; count2++){
          $scope.test2[count].ranking.push(count2);
        }
      }
    });

  // $http.get(`${SERVER}/showreviews/${$cookies.get('clickedPhoto')}`).then(resp => {
  //     console.log(resp.data)
  //     //console.log(resp.data[0].review)
  //     $scope.test2 = resp.data;
  //   });

  //console.log($scope.test2)


  $scope.modal = function (){
    if(!$rootScope.loggedIn){
      alert("You have to be logged in to review a show")
    }else{
      $scope.modalToggle = "is-active";
    }
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
      showName: $scope.info.name,
      seenIt: true,
      posterPath: $scope.info.poster_path,
      backgroundPath: $scope.info.backdrop_path,
      showDescription: $scope.info.overview
    }



    AccountService.addReview(reviewInfo).then(resp => {

        console.log(resp.data, "new review")
        //$scope.test2.unshift(resp.data);  //$window.location.href = `#!/show/${results.id}`
        $window.location.reload();
        }).catch(error => {
            console.log(error);
      }).then(

      // $http.get(`${SERVER}/showreviews/${$stateParams.showId}`).then(resp => {
      //     console.log(resp.data)
      //     $scope.test2 = resp.data;
      //     console.log(resp.data)
      //   })

      );
  };
}

ShowController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$stateParams', '$window'];

export default ShowController;


// make a div make that the background of the div then you could do
//box shadow inset and then u select all sides
