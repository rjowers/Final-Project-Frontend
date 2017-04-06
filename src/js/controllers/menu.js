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




  // getData.then(function (data) {
  //   // code
  // })
  //
  // getData.then(data => {
  //   // code
  // })


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
};

  menuController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$location', '$window', '$stateParams'] ;

  export default menuController;
