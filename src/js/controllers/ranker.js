import { token } from "../token";

function rankerController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {
  var testString = "1402,1399,1418,1622";

  var testArray = testString.split(",")
  $scope.myList = [];

  for(var count = 0; count < testArray.length; count++){
    searchShow(testArray[count])
  }

  function searchShow (input) {
    $http.get(`https://api.themoviedb.org/3/tv/${input}?api_key=${token}&language=en-US`).then(resp => {
      $scope.myList.push(resp.data)
    });
  }

console.log($scope.myList)

};

rankerController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService']
  export default rankerController;
