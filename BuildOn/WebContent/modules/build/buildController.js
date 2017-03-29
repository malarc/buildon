'use strict';

angular.module('Build')
 
.controller('BuildController',
    ['$scope','$location',
    function ($scope,$location) {
    	
    	 $scope.logout = function () {
            $location.path('/login');
    	 }
    	
    	 $scope.testCon = function () {
    		 	var myPopup;
    		    $scope.myPopup = $ionicPopup.show({
    		        templateUrl:  'modules/home/views/success.html',
    				title: "Success",
    		        scope: $scope,		
    		    })
    		 
    	 }
    	 
    	 $scope.submit = function () {
     		$location.path('/home');
            
     	 }
      
    }]);