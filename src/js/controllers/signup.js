

function signUpController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {

// let vm = this;
//
// vm.signUp = signUp;

  $scope.signUp = (user) => {
    // console.log(SERVER);

    console.log(user);
   AccountService.signup(user).then(resp => {

      // console.log(resp);
      $state.go('sign-in');
      console.log('user created');
    }).catch(error => {
        // console.log(error);
    });
  };
};

  signUpController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService'];

  export default signUpController;
