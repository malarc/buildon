'use strict';
 
angular.module('HistReport')
 
.factory('ReportService',
    ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
    function (Base64, $http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.search = function (startdate,enddate,project, callback) {
            	  	var response =$http({
                  	url : 'SearchServlet',
            		method: "POST",
            		params: {
            				 "startdate": startdate, 
            				 "enddate": enddate ,
            				 "project":project
            		  }
            		  
                  	})
                   .success(function (response,status) {
                      	alert("success"+response);
                      	var resultobj={username: username, password: password };
                      	callback(response); 
                      })
                    .error(function (response,status){
                    	alert("<<<<error>>>>"+response);
                      	callback(response);
                      });

            	  
        };
 

        return service;
    }])
 
