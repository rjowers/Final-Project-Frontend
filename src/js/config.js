function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
        .state('home', {
        url: '/home',
        templateUrl: 'templates/home.tpl.html',
        controller: 'HomeController'
      })

        // .state('root', {
        //   abstract: true,
        //   templateUrl: 'templates/layout.tpl.html',
        //   controller: 'LayoutController'
        // });
        .state('sign-up', {
          url: '/sign-up',
          controller: 'signUpController',
          templateUrl: 'templates/sign-up.tpl.html'
        })
        .state('sign-in', {
          url: '/sign-in',
          controller: 'signInController',
          templateUrl: 'templates/sign-in.tpl.html'
        })
        .state('show', {
          url: '/show/:showId',
          controller: 'ShowController',
          templateUrl: 'templates/show.tpl.html'
        })
        .state('profile-page', {
          url: '/profile-page/:user',
          controller: 'ProfilePageController',
          templateUrl: 'templates/profile-page.tpl.html'
        })
        .state('user-profile', {
          url: '/user-profile/:userId',
          controller: 'UserProfileController',
          templateUrl: 'templates/user-profile.tpl.html'
        })
        .state('not-found', {
          url: '/not-found',
          //controller: 'ReviewController',
          templateUrl: 'templates/not-found.tpl.html'
        })
        .state('results', {
          url: '/results',
          controller: 'menuController',
          templateUrl: 'templates/results.tpl.html'
        })
        .state('testnews', {
          url: '/testnews/:userId',
          controller: 'testNewsController',
          templateUrl: 'templates/testnews.tpl.html'
        })
        .state('ranker', {
          url: '/ranker/:userId',
          controller: 'rankerController',
          templateUrl: 'templates/ranker.tpl.html'
        })
        .state('review', {
          url: '/review/:id/:user',
          controller: 'ReviewController',
          templateUrl: 'templates/review.tpl.html'
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
