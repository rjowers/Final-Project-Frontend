function UserProfileController ($cookies, $scope, $http, SERVER, $state, $stateParams, AccountService) {

  $scope.photos = [];
  $scope.myVar  = false;


  function init () {

    $http.get(`${SERVER}/user/${$stateParams.userid}/photos`).then(resp => {
      $scope.user = resp.data;
      $scope.photos = resp.data.photos;

    });
  }

  init();



  $scope.addProfilepic = function (info) {
    AccountService.updateUser(info).then(resp => {
          }).catch(error => {
             console.log(error);
          });
  };


  $scope.toggle = function() {
    console.log($cookies.get('user-id') === $stateParams.userid);
    if ($cookies.get('user-id') === $stateParams.userid) {
      $scope.myVar = true;
    }
  };



}



UserProfileController.$inject = ['$cookies','$scope', '$http', 'SERVER', '$state', '$stateParams', 'AccountService'];

export default UserProfileController;
