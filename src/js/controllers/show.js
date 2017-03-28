

function ShowController ($scope, $http, SERVER, $state, $cookies, $rootScope) {
  console.log($rootScope.info)
}

ShowController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope'];

export default ShowController;
