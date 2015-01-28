require.config({
    baseUrl: '/App',
    urlArgs: 'v=1.0',

    paths: {
        'angular': '/Scripts/angular.min',
        'ngRoute': '/Scripts/angular-route.min',
        'routeResolver' : 'Services/routeResolver'
    },

    shim: {
        ngRoute: {
            deps: ['angular']
        },
        routeResolver: {
            deps: ['angular', 'ngRoute']
        },
        skyrim: {
            deps: ['routeResolver']
        },
        angular: {
            exports: 'angular'
        }
    }
});

require([
    //'angular',
    'skyrim',
    //'Services/routeResolver',
], function () {
    angular.bootstrap(document, ['skyrim']);
});