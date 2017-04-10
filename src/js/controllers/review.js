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
        //console.log($scope.myReviews)
          // console.log($scope.myReviews[0].id)
      }
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

    //console.log($scope.myReviews, "heres data for our function")
    //data.profileUrl = $scope.myReviews
    // data.userName =
    $http.get(`${SERVER}/users/${$stateParams.user}`).then(resp => {
      console.log(resp.data[0].userName)
      console.log(resp.data[0].profileUrl)
      data.userName = resp.data[0].userName
      data.profileUrl = resp.data[0].profileUrl
      console.log(data)

      $http.post(`${SERVER}/comments`, data, {
        headers: AccountService.token()
      }).then(resp => {
        console.log(resp);
      });

    })



    $scope.modalToggle = ""

  };

  $scope.close = function (){
    $scope.modalToggle = "";
  };



}

ReviewController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$stateParams'];

export default ReviewController;
