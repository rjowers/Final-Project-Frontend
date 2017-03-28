
function signUpController ($scope, $http, SERVER, $state, $cookies, $rootScope) {

  $scope.signUp = (user) => {
    // console.log(SERVER);

    console.log(user);
    $http.post(`${SERVER}/users`, user).then(resp => {
      // console.log(resp);
      console.log('user created');
    }).catch(error => {
        // console.log(error);
    });
  };
};

  signUpController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope'];

  export default signUpController;
