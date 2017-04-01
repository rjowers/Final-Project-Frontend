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
        $scope.myReviews.push(resp.data[count]);
      }
    }
  });

  var selectedReview;

  $scope.makeComment = function (review) {
    $scope.modalToggle = "is-active";
    selectedReview = review.id
  };

  $scope.enter = function (data) {

    data.review = selectedReview;
    console.log(data)
    //console.log(AccountService.token());

    $http.post(`${SERVER}/comments`, data, {
      headers: AccountService.token()
    }).then(resp => {
      console.log(resp);
    });


  };

  $scope.close = function (){
    $scope.modalToggle = "";
  };



}

ReviewController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$stateParams'];

export default ReviewController;
