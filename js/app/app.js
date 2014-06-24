var SnapRxApp = 
angular.module('snaprx', ['ui.router'])
	   .config(['$stateProvider', function($stateProvider){
	   	var home = {
              name: 'home',
              url:'/home',
              templateUrl: 'html/Home.html',
              controller: 'SnapRxController'
            };
            var login = {
              name: 'home.login',
              url:'/login',
              templateUrl: 'html/Login.html',
              controller: 'SnapRxController'
            };
             $stateProvider.state(home);
             $stateProvider.state(login);
	   }])
	   .run(['$state', function ($state) {      
           $state.transitionTo('home.login'); 
        }])
	   .controller('SnapRxController',['$scope','$state','$http',function($scope,$state,$http){
              	$scope.launchApp = function($state){
                  $state.transitionTo('home'); 
                }
        }])
;