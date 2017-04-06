function UserProfileController ($cookies, $scope, $http, SERVER, $state, $stateParams, AccountService) {

  $scope.photos = [];
  $scope.myVar  = false;


  function init () {

    $http.get(`${SERVER}/userreviews/${$stateParams.userId}`).then(resp => {
      $scope.user = resp.data;
      console.log(resp.data)
      $scope.profileUrl = resp.data[0].User.profileUrl;
      console.log($scope.profileUrl);
      //
    });
  }

  init();



  $scope.addProfilepic = (info) => {


    AccountService.updateUser(info).then(resp => {

           }).then( $state.reload())
           .catch(error => {
             console.log(error);
         });


  };





  // $scope.toggle = function() {
  //   console.log($cookies.get('user-id') === $stateParams.userid);
  //   if ($cookies.get('user-id') === $stateParams.userid) {
  //     $scope.myVar = true;
  //   }
  // };


  $scope.modal = function (){
    $scope.modalToggle = "is-active";
  }


  $scope.close = function (){
    $scope.modalToggle = "";
  }

  // function GetReviews () {

    // $http.get(`${SERVER}/reviews`).then(resp => {
    //   $scope.test3 = resp.data;
    //   console.log(resp.data);
    //   // console.log(resp.data);
    //   // $scope.photos = resp.data.photos;
    //
    // });
  // }

  // GetReviews();




  $http.get(`${SERVER}/followers/${$stateParams.userId}`).then(resp => {
        $scope.GetFollowers = resp.data;
        console.log(resp.data)

      });

  $http.get(`${SERVER}/following/${$stateParams.userId}`).then(resp => {
        $scope.GetFollowing = resp.data;
        console.log(resp.data)
          });


          $scope.Followermodal = function (){
            $scope.modalToggle = "is-active";
          }


          $scope.Followerclose = function (){
            $scope.modalToggle = "";
          }

          $scope.FollowingModal = function (){
            $scope.FollowingModalToggle = "is-active";
          }

          $scope.FollowingClose = function (){
            $scope.FollowingModalToggle = "";
          }



}



UserProfileController.$inject = ['$cookies','$scope', '$http', 'SERVER', '$state', '$stateParams', 'AccountService'];

export default UserProfileController;
