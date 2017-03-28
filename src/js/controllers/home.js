// import $ from 'jquery';

import { token } from "../token"
function HomeController ($scope, $http, SERVER, $state, $cookies, $rootScope) {

function putMovies () {
var pageNum = 1;
console.log("inside function")
  $http.get(`https://api.themoviedb.org/3/discover/tv?api_key=${token}&vote_count.gte=10&page=${pageNum}`)
  .then ( resp => {
    console.log(resp)
  }
)}
putMovies()
};

HomeController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope']

export default HomeController;

//https://api.themoviedb.org/3/discover/tv?api_key=${token}&vote_count.gte=10&page=${pageNum}
