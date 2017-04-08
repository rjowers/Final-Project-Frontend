import { token } from "../token";

function rankerController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {
  var testString = "1402,1399,1418,1622";

  var testArray = testString.split(",")
  $scope.myList = [];
  $scope.myChoice = [];

  for(var count = 0; count < testArray.length; count++){
    searchShow(testArray[count])
  }

  function searchShow (input) {
    $http.get(`https://api.themoviedb.org/3/tv/${input}?api_key=${token}&language=en-US`).then(resp => {
      $scope.myList.push(resp.data)
    });
  }

  function getShow(pageNum, show){
    $http.get(`https://api.themoviedb.org/3/discover/tv?api_key=${token}&vote_count.gte=10&page=${pageNum}`)
    .then ( resp => {
      $scope.myChoice.push(resp.data.results[show])
    })
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

var firstShowPage = getRandomInt(0, 89)
var firstShowShow = getRandomInt(0, 19)
var secondShowPage = getRandomInt(0, 89)
var secondShowShow = getRandomInt(0, 19)

while(firstShowPage === secondShowPage && firstShowShow === secondShowShow){
  secondShowPage = getRandomInt(0, 89)
  secondShowShow = getRandomInt(0, 19)
}

getShow(firstShowPage, firstShowShow)
getShow(secondShowPage, secondShowShow)
console.log($scope.myChoice)

$scope.chooseShow = function (show){
  console.log(show)

  //take chosen show.id see if it's in testArray
  //take second show.id see if it's in testArray

  //if neither is in testArray put them in the middle of the list in order
  console.log(Math.floor(testArray.length / 2))

  //if chosen show is in the list and the second show is not
  //put the second show in the middle if the chosen show is in the top half
  //put the second show immediately underneath the chosen show if the chosen show is in the bottom half

  //if second show is in the list and the chosen show is not
  //put the chosen show immediately above the second show is the second show is in the top half
  //put the chosen show in the middle is the seond show is in the bottom half of the list

  //if both shows are on the list put the chosen show immediately above the second show is the second show is higher
  //if the first show is higher no change to the list 
}

};

rankerController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService']
  export default rankerController;
