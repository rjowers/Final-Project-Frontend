

function ShowController ($scope, $http, SERVER, $state, $cookies, $rootScope) {
  console.log($rootScope.shows)
}

ShowController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope'];

export default ShowController;
