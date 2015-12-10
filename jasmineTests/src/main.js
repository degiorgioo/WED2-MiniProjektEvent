require.config({
    // base url relative to the index.html
    baseUrl: './',
    paths: {
        'angular': 'src/libraries/angular/angular.min',
        'angularMock': 'src/libraries/angular/angularMock',
        'jasmine': 'src/libraries/jasmine/jasmine',
        'jasmine-html': 'src/libraries/jasmine/jasmine-html',
        'jasmine-boot': 'src/libraries/jasmine/boot',
        'lafeteTests': 'src/modules/lafeteTests',
        'eventListControllerTest': 'src/controllers/EventListControllerTest',
        'eventControllerTest': 'src/controllers/EventControllerTest',
        'eventRepositoryTest': 'src/controllers/eventRepositoryTest',
        'eventCreationTest': 'src/controllers/eventCreationTest',
        'guestCreationTest': 'src/controllers/guestCreationTest',
        'eventRepository': '../webapp/source/classes/services/EventRepository',
        'newEventController': '../webapp/source/classes/controllers/NewEventController',
        'newGuestController': '../webapp/source/classes/controllers/NewGuestController',
        'Event': '../webapp/source/classes/models/Event',
        'Guest': '../webapp/source/classes/models/Guest',
        'configuration': '../webapp/source/classes/services/ModuleConfiguration'

    },
    // angular does not support async loading out of the box -> use the shim loader
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angularMock':{
            deps: ['angular'],
            exports: 'angular.mock'
        },
        'jasmine': {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine']
        },
        'jasmine-boot': {
            deps: ['jasmine', 'jasmine-html']
        }
    }
});

require(['jasmine-boot'], function () {
    require(['eventListControllerTest', 'eventControllerTest', 'eventCreationTest', 'guestCreationTest', 'eventRepositoryTest'], function(){
        window.onload();
    });
});