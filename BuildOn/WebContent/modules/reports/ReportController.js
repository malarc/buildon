'use strict';

angular.module('Buildrep')
 
.controller('BuildRepController',
    ['$scope', '$location', 
    function ($scope,$location) {

    	
    	 $scope.prefer = function () {
     		
             $location.path('/preference');
     	 }
    	 
    	 $scope.tabs = [{
             title: 'Pipeline',
             url: 'pipeline.html'
         }, {
             title: 'Infralogs',
             url: 'Infralogs.html'
         }, {
             title: 'CI logs',
             url: 'CI.html'
     }];

     $scope.currentTab = 'pipeline.html';

     $scope.onClickTab = function (tab) {
         $scope.currentTab = tab.url;
     }
     
     $scope.isActiveTab = function(tabUrl) {
         return tabUrl == $scope.currentTab;
     }
    	
     
     
     
    	
    }]);