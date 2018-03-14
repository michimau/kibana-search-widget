import { uiModules } from 'ui/modules';
import searchVisTemplate from 'plugins/search/search.html';

var module = uiModules.get('kibana/search', ['kibana']);

module.controller('searchController', function($scope, $element, $rootScope, Private) {
      
    $scope.setQuery = function() {
	  $scope.vis.API.queryManager.setQuery($scope.querytext);
    };

});


