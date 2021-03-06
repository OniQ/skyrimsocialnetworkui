﻿'use strict';

define([], function () {
    var services = angular.module('routeResolverServices', []);

    services.provider('routeResolver', function () {

        this.$get = function() {
            return this;
        };

        this.routeConfig = function() {
            var viewsDirectory = '/Templates',
                controllersDirectory = '/App/Controllers/',

                setBaseDirectories = function(viewsDir, controllerDir) {
                    viewsDirectory = viewsDir;
                    controllersDirectory = controllerDir;
                },

                getViewsDirectory = function() {
                    return viewsDirectory;
                },

                getControllersDirectory = function() {
                    return controllersDirectory;
                };

            return {
                setBaseDirectories: setBaseDirectories,
                getControllersDirectory: getControllersDirectory,
                getViewsDirectory: getViewsDirectory
            };
        }();

        this.route = function(routeConfig) {
            var resolve = function(baseName) {
                    var routeDef = {};
                    routeDef.templateUrl = routeConfig.getViewsDirectory() + baseName + '.html';
                    routeDef.controller = baseName + 'Ctrl';
                    routeDef.resolve = {
                        load: [
                            '$q', '$rootScope', function($q, $rootScope) {
                                var dependencies = [routeConfig.getControllersDirectory() + baseName + 'Ctrl.js'];
                                return resolveDependencies($q, $rootScope, dependencies);
                            }
                        ]
                    };

                    return routeDef;
                },

                resolveDependencies = function($q, $rootScope, dependencies) {
                    var defer = $q.defer();
                    require(dependencies, function() {
                        defer.resolve();
                        $rootScope.$apply();
                    });

                    return defer.promise;
                };

            return {
                resolve: resolve
            };
        }(this.routeConfig);
    });
});