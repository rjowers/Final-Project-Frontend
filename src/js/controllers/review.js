function ReviewController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService, $stateParams) {

  function getShow () {

    for(var count = 0; count < $rootScope.shows.length; count++){

      if($rootScope.shows[count].id == $stateParams.id){
        return count;
      }
    }
  }
  var chosenShow = getShow();

  $scope.info = $rootScope.shows[chosenShow];

  $scope.myReviews = [];

  $http.get(`${SERVER}/showreviews/${$stateParams.id}`).then(resp => {
      for(var count = 0; count < resp.data.length; count++){
        if(resp.data[count].User.id == $stateParams.user){
          $scope.myReviews.push(resp.data[count])
        }
      }
    });

}

ReviewController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$stateParams'];

export default ReviewController;
