function ProfilePageController ($scope, $http, SERVER, $state, $cookies, $rootScope, $stateParams, AccountService) {

  $http.get(`${SERVER}/userreviews/${$stateParams.user}`).then(resp => {
    for(var count = 0; count < resp.data.length; count++){
      if(resp.data[count].User.id == $stateParams.user){
        $scope.GetReviews = resp.data;
        // console.log(resp.data)
      }
    }

  });




$scope.follow = function (){
console.log("inside")
var data ={};
  $http.post(`${SERVER}/follow/${$stateParams.user}`,data, {
      headers: AccountService.token()
      }).then(resp => {
      console.log(resp);
      $rootScope.followed = true;

  });
};


  $http.get(`${SERVER}/followers/${$stateParams.user}`).then(resp => {
        $scope.GetFollowers = resp.data;
        console.log(resp.data)

      });

  $http.get(`${SERVER}/following/${$stateParams.user}`).then(resp => {
        $scope.GetFollowing = resp.data;
        console.log(resp.data)
          });


          $scope.modal = function (){
            $scope.modalToggle = "is-active";
          }


          $scope.close = function (){
            $scope.modalToggle = "";
          }

          $scope.FollowingModal = function (){
            $scope.FollowingModalToggle = "is-active";
          }

          $scope.FollowingClose = function (){
            $scope.FollowingModalToggle = "";
          }


  // $http.get(`${SERVER}/userreviews/${$stateParams.userId}`).then(resp => {
  //   $scope.user = resp.data;
  //   console.log(resp.data)
  //   $scope.profileUrl = resp.data[0].User.profileUrl;
  //   console.log($scope.profileUrl);
  //   //
  // });

      // function getShow (showId) {
      //   for(var count = 0; count < $rootScope.shows.length; count++){
      //
      //     if($rootScope.shows[count].id == showId){
      //       return count;
      //     }
      //   }
      // }

// console.log(getShow(1402));


  // $http.get(`${SERVER}/userreviews/${$stateParams.user}`).then(resp => {
  //   console.log(resp);
  //   for(var count = 0; count < resp.data.length; count++){
  //     if(resp.data[count].User.id == $stateParams.user){
  //       $scope.GetOneReview = resp.data;
  //       // $scope.myReviews.push(resp.data[count]);
  //       //console.log($scope.myReviews)
  //         // console.log($scope.myReviews[0].id)
  //         // console.log($scope.myReviews)
  //     }
  //   }
  // });



  // $http.get(`${SERVER}/showreviews/${$cookies.get('clickedPhoto')}`).then(resp => {
  //     console.log(resp.data)
  //     $scope.test3 = resp.data;
  //   });

  // function getShow () {
  //   for(var count = 0; count < $rootScope.shows.length; count++){
  //
  //     if($rootScope.shows[count].id == $cookies.get('clickedPhoto')){
  //       return count;
  //     }
  //   }
  // }
  // var chosenShow = getShow();
  //
  // $scope.info = $rootScope.shows[chosenShow];
  // $scope.fullUrl = "http://image.tmdb.org/t/p/w650//" + $rootScope.shows[chosenShow].backdrop_path;
  // //console.log($scope.fullUrl)
  //
  // $http.get(`${SERVER}/showreviews/${$cookies.get('clickedPhoto')}`).then(resp => {
  //     console.log(resp.data)
  //     $scope.test2 = resp.data;
  //   });








}

ProfilePageController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', '$stateParams', 'AccountService'];

export default ProfilePageController;
