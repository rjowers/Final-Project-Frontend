import { token } from "../token"

function menuController ($scope, $http, SERVER, $state, $cookies, $rootScope, AccountService, $location, $window, $stateParams ) {

  $scope.submit = function(data){
    console.log(data)
    searchShow(data.text);
  }

//`https://api.themoviedb.org/3/search/tv?api_key=c1590ac6ed33444a3c6284a9319516fe&query=its+always+sunny`,

  function searchShow (searchInput) {
    $http.get(`https://api.themoviedb.org/3/search/tv?api_key=${token}&query=${searchInput}`,)
    .then ( resp => {
      console.log(resp.data.results[0].id)
      // $location.url()
      $window.location.href = `#!/show/${resp.data.results[0].id}`;
    }
  )}




  // getData.then(function (data) {
  //   // code
  // })
  //
  // getData.then(data => {
  //   // code
  // })


  AccountService.me()
    .then(resp => {
      //console.log(resp.data.id)
      $scope.userId = resp.data.id
      console.log($scope.userId);
      $http.get(`${SERVER}/userreviews/${$scope.userId}`).then(resp => {
        $scope.user = resp.data;
        console.log(resp.data)
        $scope.profileUrl = resp.data[0].User.profileUrl;
        // console.log($scope.profileUrl);
        //
      })
    })
    .catch(error => {
          console.log(error);
    })





// console.log('here')
// console.log(AccountService.token())
//
//   $http.get(`${SERVER}/me`,{
//     headers: AccountService.token()
//   }).then(resp=>{
//     console.log(resp)
//   })

  // $http.post(`${SERVER}/comments`, data, {
  //   headers: AccountService.token()
  // }).then(resp => {
  //   console.log(resp);
  // });



/*
var token = req.headers[‘access-token’] || req.query.access_token;
         // If they didn’t provide a token, send them away.
         if (!token) {
           return res.status(401).send({
             message: “Must be authenticated to use this route.”
           });
         }

         // Try to decode the token.
         try {
           var decoded = jwt.decode(token, appSecrets.jwtSecret);
           var userId = decoded.id;
           // If decoding the token was successful,
           // look up the user from the token Id.
           User.findById(userId).then(user => {

             // If no matching user was found, send them away.
             if (!user) {
               return res.status(401).send({ message: “Error during authentication.” });
             }
            */


// function ClickedProfile (){
// }
};

  menuController.$inject = ['$scope', '$http', 'SERVER', '$state', '$cookies', '$rootScope', 'AccountService', '$location', '$window', '$stateParams'] ;

  export default menuController;
