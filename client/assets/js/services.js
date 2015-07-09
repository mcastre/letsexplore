(function() {
  'use strict';

  var app = angular.module('letsExplore');
  app.factory('portfolioService', ['$state', 'FoundationApi', function($state, FoundationApi) {
    var works = [
      {
        'id': 0,
        'name': 'User Inferface / User Experience',
        'img': '/assets/img/empo-messagecenter-01.png'
      },
      {
        'id': 1,
        'name': 'Birmingham-Jefferson Civic Center',
        'img': '/assets/img/savages-web-01.png'
      },
      {
        'id': 2,
        'name': 'Savage\'s Bakery',
        'img': '/assets/img/savages-web-01.png'
      }
    ];
    var getPortfolio = function() {
      return this.works;
    };
    var getPortfolioWorks = function() {
      var works = this.works;
      for (var i = 0; i < works.length; i++) {
        return works[i];
        
      }
    };
    return {
      works: works,
      getPortfolio: getPortfolio,
      getPortfolioWorks: getPortfolioWorks
    }
  }]);

})();
