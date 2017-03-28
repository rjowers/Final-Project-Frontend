import {SERVER} from "../server.js/"

function signInController ($scope, $http, SERVER, $state, $cookies, $rootScope) {
$scope.signIn = (user) => {
    // console.log('from inside signin');
    // console.log(user);
    // console.log(SERVER);
    $http.post(`http://obscure-eyrie-45843.herokuapp.com/login`, user).then(resp => {
      console.log(user)
      $rootScope.loggedIn = true;
      console.log(resp.data);
      $cookies.put('access-token', resp.data.token);
      // $cookies.put('user-id', resp.data.user.id);
      $http.defaults.headers.common['access-token'] = resp.data.token;
      $state.go('/home');
    }).catch(error => {
        console.log(error);
    });
  };
};

signInController.$inject = ['$scope', '$http', '$state', '$cookies', 'SERVER', '$rootScope']
  export default signInController;
