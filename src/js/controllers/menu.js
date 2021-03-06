import { token } from "../token"

function menuController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService, $location, $window, $stateParams ) {

  $scope.submit = function(data){
    searchShow(data.text);
  }

  function searchShow (searchInput) {
    $http.get(`https://api.themoviedb.org/3/search/tv?api_key=${token}&query=${searchInput}`)
    .then ( resp => {
      $rootScope.searchResults = resp.data.results;
      console.log(resp.data.results)
      //$window.location.href = `#!/show/${resp.data.results[0].id}`;
      //$window.location.href = `#!/results`;
      $state.go('results')
    }
  )}

  $scope.choose = function(results){
    console.log(results);
    $rootScope.shows.push(results);
    $window.location.href = `#!/show/${results.id}`;
    // console.log('hello')
    // console.log($rootScope.shows)
  }

  $scope.goRanker = function(){
    $window.location.href = `#!/ranker/${$scope.userId}`
  }

  AccountService.me()
    .then(resp => {
      //console.log(resp.data.id)
      $scope.userId = resp.data.id
      //console.log($scope.userId);
      $http.get(`${SERVER}/userreviews/${$scope.userId}`).then(resp => {
        $scope.user = resp.data;
        //console.log(resp.data)
        $scope.profileUrl = resp.data[0].User.profileUrl;
        // console.log($scope.profileUrl);
        //
      })
    })
    .catch(error => {
          console.log(error);
    })

    $scope.logout = function(){
    $cookies.remove('access-token');
    $cookies.remove('userId');
    $rootScope.loggedIn = false;
    $window.location.reload();
  }
};

  menuController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$location', '$window', '$stateParams'] ;

  export default menuController;
