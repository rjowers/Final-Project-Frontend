
// import $ from 'jquery';
import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import AppConfig from './config';
import signUpController from './controllers/signup';
import signInController from './controllers/signin';
import HomeController from './controllers/home';
import ShowController from './controllers/show';
import SERVER from './server';
import setup from './setup';

import AccountService from './services/account';

angular
    .module('app', ['ui.router', 'ngCookies'])
    .config(AppConfig)
    .service('AccountService', AccountService)
    .constant ('SERVER', SERVER)
    .run(setup)
    .controller('signUpController', signUpController)
    .controller('signInController', signInController)
    .controller('HomeController', HomeController)
    .controller('ShowController', ShowController)


import { token } from "./token";

// $http instead of $.ajax


















//  var info = [];
//  var i = 1
//
// function fluff(data){
//
//
//
//    for(var count = 0; count < data.results.length; count++){
//      info.push(data.results[count])
//   }
//
//    i++;
//   if(i < 44){
//
//    getData(i).then(fluff)
//  }else{
//
//
//
//
// var choice = 0;
// if (Math.random() < .75){
//   choice = Math.floor(Math.random()/4*680)
//   console.log(choice)
//   console.log(info[choice].original_name)
// }else{
//
//   choice = Math.floor(Math.random()/2*680)
//   console.log(choice)
//   console.log(info[choice].original_name)
// }
//
// var choice2;
// if (Math.random() < .25){
//   choice2 = Math.floor(Math.random()/4*680)
//   console.log(choice2)
//   console.log(info[choice2].original_name)
// }else if(Math.random() > .33){
//   choice2 = Math.floor(((Math.random()/2*680)+340))
//   console.log(choice2)
//   console.log(info[choice2].original_name)
// }else{
//
//   choice2 = Math.floor(Math.random()/2*680)
//   console.log(choice2)
//   console.log(info[choice2].original_name)
// }
//
// console.log(info)
// $rootScope.info = info;
// }
//
//
// }
//
// //  url: `https://api.themoviedb.org/3/search/tv?api_key=c1590ac6ed33444a3c6284a9319516fe&query=its+always+sunny`,
//
//
//
// function getData (pageNum) {
//   return $.ajax({
//
//        url: `https://api.themoviedb.org/3/discover/tv?api_key=${token}&vote_count.gte=10&page=${pageNum}`,
//        language: "en-US",
//        sort_by: "vote_average.asc",
//        timezone: "America/New_York",
//        include_null_first_air_dates: "false",
//       dataType: 'json',
//
//   });
//   console.log(pageNum);
// }
//
//
// getData(1).then(fluff);
//
// //console.log(token)
