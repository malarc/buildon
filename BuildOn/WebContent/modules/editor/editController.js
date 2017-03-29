'use strict';

angular.module('Editor')
 
.controller('EditorController',
    ['$scope', '$location', 
    function ($scope,$location) {

    	 $scope.build = function () {
     		
             $location.path('/report');
     	 }
    	    $scope.modes = ['Scheme', 'XML', 'Javascript','YAML'];
    	    $scope.mode = $scope.modes[0];
    	    $scope.aceOption = {
    	      theme: 'monokai',
    	     /* require: ['ace/ext/spellcheck'],*/
    	      require: ['ace/ext/language_tools'],
    	      advanced: {
	    	       enableSnippets: true,
	    	       enableBasicAutocompletion: true,
	    	       enableLiveAutocompletion: true,
	    	      /* spellcheck:true*/
	    	   },
	    	   /*rendererOptions: {
	    		      maxLinks: Infinity
	    		  },*/
    	      mode: $scope.mode.toLowerCase(),
    	      onLoad: function (_ace) {
    	    	
    	    	var _session = _ace.getSession();
       	        var _renderer = _ace.renderer;  
    	        // HACK to have the ace instance in the scope...
    	        $scope.modeChanged = function () {
    	          _ace.getSession().setMode("ace/mode/" + $scope.mode.toLowerCase());
    	          
    	        };
    	     // Options 
    	        _session.setUndoManager(new ace.UndoManager());
    	        _renderer.setShowGutter(true);
    	        _ace.setFontSize(16);
    	        _ace.setHighlightActiveLine(true);
    	   
    	      }
    	    };
    	    $scope.aceModel = '\n' +
    	      '\n\n\n' +
    	      '<!-- XML code  -->\n' +
    	      '<root>\n\t<foo>\n\t</foo>\n\t<bar/>\n</root>\n\n\n' +
    	      '// Javascript code \n' +
    	      'function foo(msg) {\n\tvar r = Math.random();\n\treturn "" + r + " : " + msg;\n}';
    	   
    	
    }]);