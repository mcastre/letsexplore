(function() {
  'use strict';

  var app = angular.module('letsExplore');
  app.directive('mcSvgInclude', function() {
    return {
      restrict: 'E',
      scope: {
        svgPath: '@'
      },
      templateUrl: 'templates/mc-svg-include.html'
    }
  });

})();
