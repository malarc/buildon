'use strict';
 
angular.module('HistReport')


.controller('HistController',
    ['$scope','$http','$filter',
    function ($scope,$http,$filter) {
    	
    	$scope.project = [
     	                 {name:'Bit bucket', shade:'dark'},
     	                 {name:'Log accelerator', shade:'light'},
     	                 {name:'Buildon', shade:'dark'},
     	                 {name:'blue', shade:'dark'},
     	                 {name:'yellow', shade:'light'}
     	               ];
     	
     	$scope.proj = $scope.project[2];  
       	
     	 $scope.search = function () {
     		alert("search");

     		var response =$http({
              	url : 'SearchServlet',
        		method: "POST",
        		params: {
        				 "startdate":"2017-03-01", 
        				 "enddate":"2017-03-23",
        				 "project":"Trade",
        				 "branch":"master"
        		  }
        		  
              	})
               .success(function (response,status) {
            	   alert("success::"+response);
                  	$scope.results=response;
               })
                .error(function (response,status){
                	alert("error");
                  });
     	 	}
     	
     	
     	
    	 
    	
    	
    }]);