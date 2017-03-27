function signUpController ($scope, $http, SERVER, $state, $cookies, $rootScope) {
$scope.signIn = (user) => {
    //console.log('from inside signin');
    // console.log(user);
    $http.post(`${SERVER}/login`, user).then(resp => {
      // console.log(user)
      $rootScope.loggedIn = true;
      console.log(resp.data);
      $cookies.put('access-token', resp.data.token);
      $cookies.put('user-id', resp.data.user.id);
      $http.defaults.headers.common['access-token'] = resp.data.token;
      $state.go('root.home');
    }).catch(error => {
        console.log(error);
    });
  };
};

  export default signInController;
