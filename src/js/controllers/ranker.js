import { token } from "../token";

function rankerController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService, $stateParams, $window) {

  var testString;
  //var testString = "1402,1399,1418,1622";
  var listArray = [];
  //var listArray = testString.split(",")
  $scope.myList = [];
  $scope.myChoice = [];


  $http.get(`${SERVER}/getRankings/${$stateParams.userId}`).then(resp => {
    if(!resp.data[0]){   //if they don't have a list yet create on for them
      testString = "";
      var data = {
        listId: 1,
        rankings: ""
      }
      $http.post(`${SERVER}/rankings/${$stateParams.userId}`, data, {
        headers: AccountService.token()
      }).then(resp => {
        //console.log("newlist")
      });
    }else{
      testString = resp.data[0].rankings;
      //console.log("hy")

      listArray = testString.split(",");
      //console.log(listArray);
       // array of strings => array of promises => array of ShowData by waiting
      var showData = Promise.all(listArray.map(searchShow));
      showData.then(data => { $scope.myList = data; $scope.$apply(); })
    }
    // for(var count = 0; count < listArray.length; count++){
    //   searchShow(listArray[count])
    // }
    //$scope.$apply();
  });

  function searchShow (input) {
    return $http.get(`https://api.themoviedb.org/3/tv/${input}?api_key=${token}&language=en-US`).then(resp => {
      return resp.data;
//      console.log(resp.data, "here's my show");
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

var firstShowPage = getRandomInt(0, 50)
var firstShowShow = getRandomInt(0, 19)
var secondShowPage = getRandomInt(0, 50)
var secondShowShow = getRandomInt(0, 19)

while(firstShowPage === secondShowPage && firstShowShow === secondShowShow){
  secondShowPage = getRandomInt(0, 50)
  secondShowShow = getRandomInt(0, 19)
}

getShow(firstShowPage, firstShowShow)
getShow(secondShowPage, secondShowShow)
console.log($scope.myChoice)

$scope.chooseShow = function (show){
  console.log(show.id) // equals first choice the show they picked out of the two
  console.log(listArray) // what we have in our top show list
  var secondChoiceId; // will equal the second choice what they didn't pick
  console.log($scope.myChoice) // the two shows we can choose from
  var firstChoiceListLocation;
  var secondChoiceListLocation;

// checks to see which id the second choice is
  if(show.id === $scope.myChoice[0].id){
    secondChoiceId = $scope.myChoice[1].id;
  }else{
    secondChoiceId = $scope.myChoice[0].id;
  }

  for(var count = 0; count < listArray.length; count++){
    // check to see if the chosen show is in the top show list and where it is
    if(show.id == listArray[count]){
      firstChoiceListLocation = count + 1;
    }
    //check to see if second show is in the top show list and where it is
    if(secondChoiceId == listArray[count]){
      secondChoiceListLocation = count + 1;
    }
  }

  //if neither is in listArray put them in the middle of the list in order
  if(!firstChoiceListLocation && !secondChoiceListLocation){
    console.log("neither on list")
    var putLocation = Math.floor(listArray.length / 2)
    listArray.splice(putLocation, 0, secondChoiceId.toString());
    listArray.splice(putLocation, 0, show.id.toString());
    console.log(listArray, "this is what we send the server")
    var data = {
      rankings: listArray.toString()
    }
    AccountService.updateRankings(data, $stateParams.userId).then(resp => {
       console.log(resp)
       //$window.location.href = `#!/ranker/${$stateParams.userId}`
       //$state.reload();
       $window.location.reload();
    })
    .catch(error => {
    console.log(error);
    });
  }

  //if chosen show is in the list and the second show is not
  //put the second show in the middle if the chosen show is in the top half
  //put the second show immediately underneath the chosen show if the chosen show is in the bottom half
  if(firstChoiceListLocation && !secondChoiceListLocation){
    console.log("first choice on list second choice not")
    var putLocation = Math.floor(listArray.length / 2)
    if(firstChoiceListLocation <= putLocation){
      listArray.splice(putLocation, 0, secondChoiceId.toString());
    }else{
      listArray.splice(firstChoiceListLocation, 0, secondChoiceId.toString());
    }
    console.log(listArray)
    var data = listArray.toString();
    console.log(data)
    AccountService.updateRankings(data, $stateParams.userId).then(resp => {
       console.log(resp)
       $window.location.reload();
    })
    .catch(error => {
    console.log(error);
    });
  }



  //if second show is in the list and the chosen show is not
  //put the chosen show immediately above the second show is the second show is in the top half
  //put the chosen show in the middle is the second show is in the bottom half of the list
  if(!firstChoiceListLocation && secondChoiceListLocation){
    console.log("second choice is on list first is not")
    var putLocation = Math.floor(listArray.length / 2)
    if(secondChoiceListLocation <= putLocation){
      listArray.splice(secondChoiceListLocation - 1, 0, show.id.toString());
    }else{
      listArray.splice(putLocation, 0, show.id.toString())
    }
    console.log(listArray);
    var data = listArray.toString();
    console.log(data)
    AccountService.updateRankings(data, $stateParams.userId).then(resp => {
       console.log(resp)
       $window.location.reload();
    })
    .catch(error => {
    console.log(error);
    });
  }


  //if both shows are on the list put the chosen show immediately above the second show is the second show is higher
  //if the first show is higher no change to the list
  if(firstChoiceListLocation && secondChoiceListLocation){
    console.log("both shows are on the list")
    if(firstChoiceListLocation < secondChoiceListLocation){
      listArray.splice(secondChoiceListLocation - 1, 0, show.id.toString());
    }else{

    }
    console.log(listArray)
    var data = listArray.toString();
    console.log(data)
    AccountService.updateRankings(data, $stateParams.userId).then(resp => {
       console.log(resp)
       $window.location.reload();
    })
    .catch(error => {
    console.log(error);
    });
  }
}

};

rankerController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$stateParams', '$window']
  export default rankerController;
