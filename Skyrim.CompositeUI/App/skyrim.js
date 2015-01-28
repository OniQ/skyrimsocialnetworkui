var skyrim = angular.module('skyrim', ['ngRoute', 'routeResolverServices']);

skyrim.config([
    '$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
    function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide) {
        skyrim.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
        };

        var route = routeResolverProvider.route;

        $routeProvider
            .when('/about', route.resolve('UserProfile'))
            .otherwise({ redirect: '/' });

        //$routeProvider
        //    .when('/', {
        //        templateUrl: 'App/UserProfile/userProfile.html',
        //        controller: 'userProfileCtrl'
        //    })
        //    .when('/about', {
        //        templateUrl: 'App/About/about.html',
        //        controller: 'aboutCtrl'
        //    })
        //    .otherwise({
        //        redirectTo: '/'
        //    });

        return skyrim;
    }
]);

skyrim.controller('mainController', function ($scope) {
    $scope.message = "Main Content";
});;