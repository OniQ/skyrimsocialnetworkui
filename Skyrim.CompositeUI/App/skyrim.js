var skyrim = angular.module('skyrim', ['ngRoute'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
          templateUrl: 'UserProfile/userProfile.html',
          controller: 'userProfileCtrl'
      })
      .when('/about', {
          templateUrl: 'About/about.html',
          controller: 'aboutCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });
}])
.controller('mainController', function ($scope) {
    $scope.message = "Main Content";
});;