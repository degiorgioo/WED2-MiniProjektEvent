require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'angular': 'libraries/angular/angular.min',
        'app': 'classes'
    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'angular': {
            exports: 'angular'
        }
    }
});

define(['angular','app/modules/lafete'], function (angular, lafete) {
    return angular.bootstrap(lafete);
});