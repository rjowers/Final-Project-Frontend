function AccountService ($http, SERVER, $cookies) {

let service = this;

service.signup = signup;
// service.login = login;
// service.seenit = seenit;
// service.getshow = getshow;
// service.postreview = postreview;
// service.getreview = getreview;
// service.postcomments = postcomment;
// service.getcomments = postcomments;

function signup (user) {
  return $http.post (`${SERVER}/users`,  {
    // headers: getHeader()

  });
};

// function login (user) {
//   return $http.post (`${SERVER}/users`, {
//     headers: getHeader()
//
//   });
// };
//
//
// function signup (user) {
//   return $http.post (`${SERVER}/users`, {
//     headers: getHeader()
//
//   });
// };
//
// function signup (user) {
//   return $http.post (`${SERVER}/users`, {
//     headers: getHeader()
//
//   });
// };
//
// function signup (user) {
//   return $http.post (`${SERVER}/users`, {
//     headers: getHeader()
//
//   });
// };
//
// function signup (user) {
//   return $http.post (`${SERVER}/users`, {
//     headers: getHeader()
//
//   });
// };
//
// function signup (user) {
//   return $http.post (`${SERVER}/users`, {
//     headers: getHeader()
//
//   });
// };
//
// function signup (user) {
//   return $http.post (`${SERVER}/users`, {
//     headers: getHeader()
//
//   });
// };











function getHeader () {
    return {
      'access-token': $cookies.get('access-token')
    }
  }



}

AccountService.$inject = ['$http', 'SERVER', '$cookies']
export default AccountService;
