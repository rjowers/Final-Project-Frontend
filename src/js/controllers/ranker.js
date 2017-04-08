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

  function getShow(pageNum, show){
    $http.get(`https://api.themoviedb.org/3/discover/tv?api_key=${token}&vote_count.gte=10&page=${pageNum}`)
    .then ( resp => {
      console.log(resp.data.results[show])
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

};

rankerController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService']
  export default rankerController;
