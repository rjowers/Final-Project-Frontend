function setup ($rootScope, $cookies, $http) {

  let token = $cookies.get('access-token');

  if (token) {
    $rootScope.loggedIn = true;
    $http.defaults.headers.common['access-token'] = token;
  }

}

setup.$inject = ['$rootScope', '$cookies', '$http'];

export default setup;
