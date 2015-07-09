(function() {
  'use strict';

  var app = angular.module('letsExplore');
  app.controller('PortfolioController', ['portfolioService', function(portfolioService) {
    var portfolio = this;
    portfolio.works = portfolioService.getPortfolio();    
  }]);

})();
