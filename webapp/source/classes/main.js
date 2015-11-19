require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'angular': 'libraries/angular/angular.min',
        'angularRoute': 'libraries/angular/angular-route',
        'domReady': 'libraries/require/domReady',
        'app': 'classes'
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularRoute': {
            deps: ['angular']
        }
    }
});

require(['angular','app/modules/lafete'], function (angular, lafete) {
    angular.element(document).ready(function(){
        return angular.bootstrap(document, [lafete.name]);
    });
});