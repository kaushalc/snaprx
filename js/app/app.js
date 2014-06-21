var SnapRxApp = 
angular.module('snaprx', ['ui.router'])
	   .config(['$stateProvider', function($stateProvider){
	   	var home = {
              name: 'home',
              url:'/home',
              templateUrl: 'html/Home.html',
              controller: 'SnapRxController'
            };
             $stateProvider.state(home);
	   }])
	   .run(['$state', function ($state) {      
           $state.transitionTo('home'); 
        }])
	   .controller('SnapRxController',['$scope','$state','$http',function($scope,$state,$http){
              	
        }])
;