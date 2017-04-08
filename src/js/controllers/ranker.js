function rankerController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {
  var testString = "1402,1399,1418,1622";

  var testArray = testString.split(",")
  console.log(testArray);

  // for(var count = 0; count < testArray.length){
  //   searchShow(testArray[count])
  // }

  function searchShow (searchInput) {
    $http.get(`https://api.themoviedb.org/3/search/tv?api_key=${token}&query=${searchInput}`)
    .then ( resp => {
      $rootScope.searchResults = resp.data.results;
      console.log(resp.data.results)
    }
  )}



};

rankerController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService']
  export default rankerController;
