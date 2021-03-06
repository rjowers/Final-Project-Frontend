function signInController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService, $window) {
  // console.log($cookies);

$scope.signIn = (user) => {
    // console.log('from inside signin');
    // console.log(user);
    // console.log(SERVER);
AccountService.login(user).then(resp => {
  // $http.post(`${SERVER}/login`, user).then(resp => {

      console.log(user)
      $rootScope.loggedIn = true;
      console.log(resp.data);
      $cookies.put('access-token', resp.data.token);
      // $cookies.put('user-id', resp.data.user.id);
      // $http.defaults.headers.common['access-token'] = resp.data.token;
      $window.location.reload();
      $window.location.href = '#!/home';
    }).catch(error => {
        console.log(error);
    });
  };
};

signInController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$window']
  export default signInController;
