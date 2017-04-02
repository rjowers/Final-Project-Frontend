

function menuController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {

  $scope.submit = function(data){
    console.log(data)
  }

  // function putMovies () {
  // var pageNum = 1;
  //   $http.get(`https://api.themoviedb.org/3/discover/tv?api_key=${token}&vote_count.gte=10&page=${pageNum}`)
  //   .then ( resp => {
  //     $rootScope.shows = resp.data.results
  //     console.log($rootScope.shows)
  //   }
  // )}


};

  menuController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService'];

  export default menuController;
