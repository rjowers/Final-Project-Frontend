function ProfilePageController ($scope, $http, SERVER, $state, $cookies, $rootScope, $stateParams, AccountService) {

  // $http.get(`${SERVER}/users/`).then(resp => {
  //     console.log(resp.data)
  //     // console.log(resp.data[5].User.profileUrl)
  //     //console.log(resp.data[0].review)
  //     $scope.test= resp.data;
  //   });

  $http.get(`${SERVER}/showreviews/${$cookies.get('clickedPhoto')}`).then(resp => {
      console.log(resp.data)
      $scope.test3 = resp.data;
    });






}

ProfilePageController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', '$stateParams', 'AccountService'];

export default ProfilePageController;
