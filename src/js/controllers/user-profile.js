function UserProfileController ($cookies, $scope, $http, SERVER, $state, $stateParams) {

  $scope.photos = [];
  $scope.myVar  = false;


  function init () {

    $http.get(`${SERVER}/user/${$stateParams.userid}/photos`).then(resp => {
      $scope.user = resp.data;
      $scope.photos = resp.data.photos;

    });
  }

  init();



  $scope.addProfilepic = (info) => {

    $http.put(`${SERVER}/update/${$stateParams.userid}`, info)
    .then( $state.reload())
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

}



UserProfileController.$inject = ['$cookies','$scope', '$http', 'SERVER', '$state', '$stateParams'];

export default UserProfileController;
