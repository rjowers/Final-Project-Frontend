import { token } from "./token"



function setup ($rootScope, $cookies, $http) {


  let access = $cookies.get('access-token');

  if (access) {
    $rootScope.loggedIn = true;
    // $http.defaults.headers.common['access-token'] = token;
  }
  function putMovies () {
  var pageNum = 1;
    $http.get(`https://api.themoviedb.org/3/discover/tv?api_key=${token}&vote_count.gte=10&page=${pageNum}`)
    .then ( resp => {
      console.log(resp.data.results)
      $rootScope.shows = resp.data.results
      console.log($rootScope.shows)
      // $scope.posterPhotos = $rootScope.info
    }
  )}
  putMovies()
}

setup.$inject = ['$rootScope', '$cookies', '$http'];

export default setup;
