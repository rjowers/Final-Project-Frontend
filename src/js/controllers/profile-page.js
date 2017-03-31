function ProfilePageController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {

  $http.get(`${SERVER}/users/`).then(resp => {
      console.log(resp.data)
      // console.log(resp.data[5].User.profileUrl)
      //console.log(resp.data[0].review)
      $scope.test= resp.data;
    });


}

ProfilePageController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService'];

export default ProfilePageController;
