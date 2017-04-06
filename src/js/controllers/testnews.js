

function testNewsController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService) {

  $http.get(`${SERVER}/news/1`).then(resp => {
      console.log(resp.data)
      // if(resp.data.newsType === "follow"){
      //   $scope.newsItem =
      // }
    });

};

  testNewsController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService'];

  export default testNewsController;
