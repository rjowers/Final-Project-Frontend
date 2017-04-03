import { token } from "../token"

function menuController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {

  $scope.submit = function(data){
    console.log(data)
    searchShow(data.text);
  }

//`https://api.themoviedb.org/3/search/tv?api_key=c1590ac6ed33444a3c6284a9319516fe&query=its+always+sunny`,

  function searchShow (searchInput) {
    $http.get(`https://api.themoviedb.org/3/search/tv?api_key=${token}&query=${searchInput}`,)
    .then ( resp => {
      console.log(resp)
    }
  )}




};

  menuController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService'];

  export default menuController;
