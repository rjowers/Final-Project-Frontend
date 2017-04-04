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




}



UserProfileController.$inject = ['$cookies','$scope', '$http', 'SERVER', '$state', '$stateParams', 'AccountService'];

export default UserProfileController;
