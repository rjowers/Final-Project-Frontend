function UserProfileController ($cookies, $scope, $http, SERVER, $state, $stateParams, AccountService) {

  $scope.photos = [];
  $scope.myVar  = false;


  function init () {

    $http.get(`${SERVER}/userreviews/${$stateParams.userId}`).then(resp => {
      $http.get(`${SERVER}/users/${$stateParams.userId}`).then(resp => {
        $scope.user = resp.data;
        console.log(resp.data)
      })
      $scope.UserReviews = resp.data;
      //console.log(resp.data)
      $scope.profileUrl = resp.data[0].User.profileUrl;
      //console.log($scope.profileUrl);

      //try to make stars
      for(var count = 0; count < $scope.UserReviews.length; count++){
        //console.log($scope.UserReviews[count].ranking)
        var length = $scope.UserReviews[count].ranking;
        $scope.UserReviews[count].ranking = [];
        for(var count2 = 0; count2 < length; count2++){
          $scope.UserReviews[count].ranking.push(count2);
        }
      }
    });
  }

  init();



  $scope.addProfilepic = (info) => {


    AccountService.updateUser(info).then(resp => {

           }).then( $state.reload())
           .catch(error => {
             console.log(error);
         });


  };





  // $scope.toggle = function() {
  //   console.log($cookies.get('user-id') === $stateParams.userid);
  //   if ($cookies.get('user-id') === $stateParams.userid) {
  //     $scope.myVar = true;
  //   }
  // };


  $scope.modal = function (){
    $scope.modalToggle = "is-active";
  }


  $scope.close = function (){
    $scope.modalToggle = "";
  }

  // function GetReviews () {

    // $http.get(`${SERVER}/reviews`).then(resp => {
    //   $scope.test3 = resp.data;
    //   console.log(resp.data);
    //   // console.log(resp.data);
    //   // $scope.photos = resp.data.photos;
    //
    // });
  // }

  // GetReviews();




  $http.get(`${SERVER}/followers/${$stateParams.userId}`).then(resp => {
        $scope.GetFollowers = resp.data;
        //console.log(resp.data)

      });

  $http.get(`${SERVER}/following/${$stateParams.userId}`).then(resp => {
        $scope.GetFollowing = resp.data;
        //console.log(resp.data)
          });


          $scope.FollowerModal = function (){
            $scope.FollowerModalToggle = "is-active";
          }


          $scope.Followerclose = function (){
            $scope.FollowerModalToggle = "";
          }

          $scope.FollowingModal = function (){
            $scope.FollowingModalToggle = "is-active";
          }

          $scope.FollowingClose = function (){
            $scope.FollowingModalToggle = "";
          }




          $scope.news = [];
          $scope.usersFollowed = [];

          // AccountService.me()
          //   .then(resp => {
          //      $scope.userTest = resp.data.id
          //      console.log($scopeuserTest)
          //     })
          //   .catch(error => {
          //         console.log(error);
          //   })

       getNews();
       setInterval(getNews, 15000);

       //function test () {console.log("test")}

       function getNews () {
          console.log("begining of get news")
          //first get a list of all the ppl you are following useing this route => /following/:userId'
          $http.get(`${SERVER}/following/${$stateParams.userId}`).then(resp => {
              for(var count = 0; count < resp.data.length; count++){
                //console.log(resp.data[count].followedId);
                if(!$scope.usersFollowed.includes(resp.data[count].followedId)){
                  $scope.usersFollowed.push(resp.data[count].followedId)
                }
              }
              //console.log($scope.usersFollowed)
              for(var i = 0; i < $scope.usersFollowed.length; i++){
                $http.get(`${SERVER}/news/${$scope.usersFollowed[i]}`).then(resp => {
                  $scope.news.push(resp.data);
                  //console.log($scope.news[0])
                  if($scope.news.length === $scope.usersFollowed.length){
                    if($scope.usersFollowed.length === 1){
                      var arr3 = $scope.news[0]
                    }
                    if($scope.usersFollowed.length === 2){
                      var arr3 = $scope.news[0].concat($scope.news[1])
                    }
                    if($scope.usersFollowed.length === 3){
                      var arr3 = $scope.news[0].concat($scope.news[1], $scope.news[2])
                    }
                    if($scope.usersFollowed.length === 4){
                      var arr3 = $scope.news[0].concat($scope.news[1], $scope.news[2], $scope.news[3])
                    }
                    if($scope.usersFollowed.length === 5){
                      var arr3 = $scope.news[0].concat($scope.news[1], $scope.news[2], $scope.news[3], $scope.news[4])
                    }


                    // console.log($scope.news);
                    // var times = $scope.news.length
                    // for(var i2 = 0; i2 < times; i2++){
                    //   if($scope.news[i2 + 1]){
                    //     arr3 = $scope.news[i2].concat($scope.news[i2 + 1]);
                    //   }
                    //   console.log($scope.news)
                    // }
                    //console.log(arr3)
                    //console.log(arr3[0].createdAt)
                    // var test = Date.parse(arr3[0].createdAt)
                    // console.log(test)
                    var sortedArray = arr3.sort(function (a, b) {
                      return Date.parse(a.createdAt) - Date.parse(b.createdAt);
                    });
                    $scope.news = sortedArray
                    for(var count2 = 0; count2 < $scope.news.length; count2++){
                      //console.log($scope.news[count2].)
                      //if field is null dont print

                      if($scope.news[count2].newsType == "follow"){
                         $scope.news[count2].newsType = "followed";

                         if(!$scope.news[count2].Relationship){
                           //console.log('no')
                           $scope.news[count2].newsType = "no longer follows";
                           $scope.news[count2].Relationship = {}
                           //console.log(count2)
                           //delete $scope.news[count2]
                           //$scope.news.splice(count2, 1)
                         }
                        //  console.log($scope.news[count2].Relationship.followedId)
                        //  console.log($scope.userArray.length)
                        //  for(var count3 = 0; count3 < $scope.userArray.length; count++){
                        //    console.log('in')
                        //    if($scope.userArray[count3].id == $scope.news[count2].Relationship.followedId){
                        //      $scope.news[count2].Relationship.followedId = $scope.userArray[count3].userName;
                        //    }
                        //  }
                      }
                      if($scope.news[count2].newsType === "comment"){
                        $scope.news[count2].newsType = "commented"
                        $scope.news[count2].Relationship = {};
                        $scope.news[count2].Relationship.followedId = "a review";
                      }
                      if($scope.news[count2].newsType === "review"){
                        $scope.news[count2].newsType = "reviewed"
                        $scope.news[count2].Relationship = {};
                        $scope.news[count2].Relationship.followedId = $scope.news[count2].Review.showName;
                      }
                      //console.log(count2)
                      //console.log($scope.news)
                    }
                  }
                });
              }

          });
        } ////end of news function

}



UserProfileController.$inject = ['$cookies','$scope', '$http', 'SERVER', '$state', '$stateParams', 'AccountService'];

export default UserProfileController;
