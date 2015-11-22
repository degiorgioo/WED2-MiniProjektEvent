require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'angular': 'libraries/angular/angular.min',
        'angularRoute': 'libraries/angular/angular-route',
        'EventController': 'classes/controllers/EventController',
        'EventListController': 'classes/controllers/EventListController',
        'NavigationController': 'classes/controllers/NavigationController',
        'NewEventController': 'classes/controllers/NewEventController',
        'NewGuestController': 'classes/controllers/NewGuestController',
        'UpdateEventController': 'classes/controllers/UpdateEventController',
        'UpdateGuestController': 'classes/controllers/UpdateGuestController',
        'EventRepository': 'classes/services/EventRepository',
        'ModuleConfiguration': 'classes/services/ModuleConfiguration',
        'lafete':'classes/modules/lafete',
        'Event': 'classes/models/Event',
        'Guest': 'classes/models/Guest',
        'Routes':'classes/configs/Routes'
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

require(['angular','lafete'], function (angular, lafete) {
    angular.element(document).ready(function(){
        return angular.bootstrap(document, [lafete.name]);
    });
});