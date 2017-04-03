function UserProfileController ($cookies, $scope, $http, SERVER, $state, $stateParams, AccountService) {

  $scope.photos = [];
  $scope.myVar  = false;


  function init () {

    $http.get(`${SERVER}/users/${$stateParams.userid}/`).then(resp => {
      $scope.user = resp.data;

      $scope.photos = resp.data.photos;
      // console.log(resp.data.photos);

    });
  }

  init();



  $scope.addProfilepic = (info) => {
var pic = {
  profileUrl
}
    AccountService.updateUser(info).then(resp => {

           }).then( $state.reload())
           .catch(error => {
             console.log(error);
         });


  };



  $scope.toggle = function() {
    console.log($cookies.get('user-id') === $stateParams.userid);
    if ($cookies.get('user-id') === $stateParams.userid) {
      $scope.myVar = true;
    }
  };


  // function GetReviews () {

    $http.get(`${SERVER}/reviews`).then(resp => {
      $scope.test3 = resp.data;
      console.log(resp.data);
      // console.log(resp.data);
      // $scope.photos = resp.data.photos;

    });
  // }

  // GetReviews();




}



UserProfileController.$inject = ['$cookies','$scope', '$http', 'SERVER', '$state', '$stateParams', 'AccountService'];

export default UserProfileController;
