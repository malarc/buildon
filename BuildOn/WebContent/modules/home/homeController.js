'use strict';
 
angular.module('Home')



.controller('HomeController',
    ['$scope','$timeout',
    function ($scope,$timeout) {
    	  
    	  $scope.labels = ['1', '2', '3', '4', '5'];
    	  $scope.series = ['Latest build status'];
    	  $scope.data = [ [20,20,30,40, 50],
    	   [28, 48, 40, 19, 86, 27, 90]
    	  ];
    	  
    	  $scope.labels1 = ['1', '2', '3', '4', '5'];
    	  $scope.series1 = ['Project wise'];
    	  $scope.data1 = [ [20,20,30,40, 50], [28, 48, 40, 19, 86, 27, 90]
    	  ];
    	  
    	  
    	 
    	  $scope.project = [
    	                    {value: 1, name: "Buildon"},
    	                    {value: 2, name: "Bitbucket"},
    	                    {value: 2, name: "LogAccelerator"}
    	                  ];
    	 $scope.enrollments =[
    	                    {name: "Your project", id: 1, rating: 1},
    	                    {name: "your rating", id: 3, rating: 1},
    	                    {name: "Choose image", id:  5, rating: 1}
    	                  ];
    	 
    	
    	
    }]);