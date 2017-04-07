

function testNewsController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {
  $scope.news = [];
  $scope.usersFollowed = [];
//first get a list of all the ppl you are following useing this route => /following/:userId'
  $http.get(`${SERVER}/following/1`).then(resp => {
      for(var count = 0; count < resp.data.length; count++){
        //console.log(resp.data[count].followedId);
        if(!$scope.usersFollowed.includes(resp.data[count].followedId)){
          $scope.usersFollowed.push(resp.data[count].followedId)
        }
      }

      for(var i = 0; i < $scope.usersFollowed.length; i++){
        $http.get(`${SERVER}/news/${$scope.usersFollowed[i]}`).then(resp => {
          //console.log(resp.data)
          $scope.news.push(resp.data);
          //console.log($scope.news[0])
          if($scope.news.length === $scope.usersFollowed.length){
            var arr3 = $scope.news[0].concat($scope.news[1])
            // console.log($scope.news);
            // var times = $scope.news.length
            // for(var i2 = 0; i2 < times; i2++){
            //   if($scope.news[i2 + 1]){
            //     arr3 = $scope.news[i2].concat($scope.news[i2 + 1]);
            //   }
            //   console.log($scope.news)
            // }
            console.log(arr3)
            //console.log(arr3[0].createdAt)
            // var test = Date.parse(arr3[0].createdAt)
            // console.log(test)
            var sortedArray = arr3.sort(function (a, b) {
              return Date.parse(a.createdAt) - Date.parse(b.createdAt);
            });
            $scope.news = sortedArray
          }
        });
      }

      // function compareFunction (a, b){
      //   if (Date.parse(a is less than b by some ordering criterion) {
      //     return -1;
      //   }
      //   if (a is greater than b by the ordering criterion) {
      //     return 1;
      //   }
      //   // a must be equal to b
      //   return 0;
      //
      // }


  });






};

  testNewsController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService'];

  export default testNewsController;
