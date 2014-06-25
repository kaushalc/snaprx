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
              name: 'login',
              url:'/login',
              templateUrl: 'html/Login.html',
              controller: 'SnapRxController'
            };
             $stateProvider.state(home);
             $stateProvider.state(login);
	   }])
	   .run(['$state', function ($state) {      
           $state.transitionTo('home'); 
        }])
	   .controller('SnapRxController',['$scope','$state','$http',function($scope,$state,$http){
              	$scope.launchApp = function($state){
                  $state.transitionTo('home'); 
                }

                $scope.takePicture = function(){

                    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                                                destinationType: Camera.DestinationType.FILE_URI });

                    function onSuccess(imageURI) {
                        var image = document.getElementById('myImage');
                        image.src = imageURI;
                    }

                    function onFail(message) {
                        alert('Failed because: ' + message);
                    }
                }
      }])
;

//https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md   camera plugin