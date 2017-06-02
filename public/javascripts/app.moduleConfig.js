var app = angular.module('WeddingApp', ['ui.router', 'angularModalService', 'blockUI']);

app.run(function($rootScope, $state ){
                               
    $state.go('home');                    
});

app.config(function($stateProvider, $urlRouterProvider, blockUIConfig){

  blockUIConfig.autoBlock = false;
  blockUIConfig.template = '<div class="block-ui-overlay"></div>' +
                          '<div class="block-ui-message-container">'+
                            '<div class="sk-folding-cube"> ' +
                              '<div class="sk-cube1 sk-cube"></div>' +
                              '<div class="sk-cube2 sk-cube"></div>' +
                              '<div class="sk-cube4 sk-cube"></div>' +
                              '<div class="sk-cube3 sk-cube"></div>' +
                            '</div>' + 
                          '</div>';

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html"
    })
    // .state('couponGroup', {
    //   url: "/couponGroup",
    //   templateUrl: "templates/couponGroup.html",
    //   controller: 'couponGroupController',
    //   controllerAs: 'couponGroupCtrl'
    // })
    // .state('accountManager', {
    //   url: "/accountManager",
    //   templateUrl: "templates/accountManager.html",
    //   controller: 'accountManagerController',
    //   controllerAs: 'accountManagerCtrl'
    // })


    $urlRouterProvider.otherwise("/home");

});