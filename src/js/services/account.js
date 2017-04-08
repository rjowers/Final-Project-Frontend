function AccountService ($http, SERVER, $cookies) {

let service = this;

service.signup = signup;
service.login = login;
service.addReview = addReview;
service.getReviewsShow = getReviewsShow;
service.updateUser = updateUser;
service.token = token
service.me = me
//service.addReview2 = addReview2;
// service.seenit = seenit;
// service.getshow = getshow;
// service.postreview = postreview;
// service.getreview = getreview;
// service.postcomments = postcomment;
// service.getcomments = postcomments;

function signup (user) {
  return $http.post (`${SERVER}/users`, user);
}

function login (user) {
  return $http.post (`${SERVER}/login`, user);
}


function addReview (data) {
  return $http.post(`${SERVER}/reviews`, data, {
    headers: getHeader()
  });
}

function getReviewsShow (user) {
  return $http.get (`${SERVER}/reviews`, user);
}

function updateUser (data){
  return $http.put(`${SERVER}/updateuser`, data, {
    headers: getHeader()
  });
}



function token (){
  return getHeader();
}

function me (){
  return $http.get(`${SERVER}/me`, {
    headers: getHeader()
  });
}

// function addReview2 (data) {
//   return $http.post(`${SERVER}/reviews`, data, {
//     headers: getHeader()
//   });
// }


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
