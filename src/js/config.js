function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
        // .state('root', {
        //   abstract: true,
        //   templateUrl: 'templates/layout.tpl.html',
        //   controller: 'LayoutController'
        // });
        .state('sign-up', {
          url: '/sign-up',
          // controller: 'UserController',
          templateUrl: 'templates/sign-up.tpl.html'
        })
        .state('sign-in', {
          url: '/sign-in',
          // controller: 'UserController',
          templateUrl: 'templates/sign-in.tpl.html'
        });
        // .state('root.home', {
        //   url: '/home',
        //   templateUrl: 'templates/photo-list.tpl.html',
        //   controller: 'PhotoController'
        // })
        // .state('root.user', {
        //   url: '/user/:userid',
        //   templateUrl: 'templates/user-page.tpl.html',
        //   controller: 'UserPageController'
        // })
        // .state('root.addphoto', {
        //   url: '/photo/add',
        //   controller: 'PhotoController',
        //   templateUrl: 'templates/add-photo.tpl.html'
        // })
        // .state('root.photo', {
        //   url: '/photo/:photoid',
        //   controller: 'PhotoSingleController',
        //   templateUrl: 'templates/photo-single.tpl.html'
        // });


  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config;
