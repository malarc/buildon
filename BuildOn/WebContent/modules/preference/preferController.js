'use strict';
 
angular.module('Preference')



.controller('PreferController',
    ['$scope','$location',
    function ($scope, $location) {
    	
    	$scope.images = [
    	                 {name:'black', shade:'dark'},
    	                 {name:'white', shade:'light'},
    	                 {name:'red', shade:'dark'},
    	                 {name:'blue', shade:'dark'},
    	                 {name:'yellow', shade:'light'}
    	               ];
    	$scope.image = $scope.images[2];
    	
    	$scope.project = [
    	                 {name:'Bit bucket', shade:'dark'},
    	                 {name:'Log accelerator', shade:'light'},
    	                 {name:'Buildon', shade:'dark'},
    	                 {name:'blue', shade:'dark'},
    	                 {name:'yellow', shade:'light'}
    	               ];
    	
    	$scope.proj = $scope.project[2];  
    	 $scope.histreport = function () {
      		
             $location.path('/histreport');
     	 }
    	 
    	
    	
    }]);