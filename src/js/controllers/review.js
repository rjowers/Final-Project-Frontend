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
  $scope.myComments = [];

  $http.get(`${SERVER}/showreviews/${$stateParams.id}`).then(resp => {
    for(var count = 0; count < resp.data.length; count++){
      if(resp.data[count].User.id == $stateParams.user){
        $scope.myReviews.push(resp.data[count]);
        console.log($scope.myReviews)
          // console.log($scope.myReviews[0].id)
      }
    }

    for(var i = 0; i < $scope.myReviews.length; i++){
      //console.log($scope.myReviews[i].id)
      $http.get(`${SERVER}/comments/${$scope.myReviews[i].id}`).then(resp => {
        //console.log(resp.data[0].comment);
        //console.log(resp.data)
        $scope.myComments.push(resp.data)
        console.log($scope.myComments)
        if($scope.myComments.length === $scope.myReviews.length){
          console.log('equal')
          for(var i2 = 0; i2 < $scope.myReviews.length; i2++){
            $scope.myReviews[i2].commentsArray = $scope.myComments[i2];
            console.log($scope.myReviews)
          }

        }
      });
    }
  });

  //console.log($scope.myReviews.id)



  var selectedReview;

  $scope.makeComment = function (review) {
    $scope.modalToggle = "is-active";
    selectedReview = review.id
  };

  $scope.enter = function (data) {

    data.review = selectedReview;
    //console.log(data)
    //console.log(AccountService.token());

    $http.post(`${SERVER}/comments`, data, {
      headers: AccountService.token()
    }).then(resp => {
      console.log(resp);
    });

    $scope.modalToggle = ""

  };

  $scope.close = function (){
    $scope.modalToggle = "";
  };



}

ReviewController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$stateParams'];

export default ReviewController;
