//Routes
define([], function () {
    return function($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'EventListController',
                templateUrl: '../views/events.html'
            }).when('/event/:eventId', {
                controller: 'EventController',
                templateUrl: '../views/eventDetails.html'
            }).when('/newEvent', {
                controller: 'NewEventController',
                templateUrl: '../views/newEvent.html'
            }).when('/updateEvent', {
                controller: 'UpdateEventController',
                templateUrl: '../views/updateEvent.html'
            }).when('/newGuest/Event/:eventId', {
                controller: 'NewGuestController',
                templateUrl: '../views/newGuest.html'
            }).when('/updateGuest/Event/:eventId/Guest/:guestId', {
                controller: 'UpdateGuestController',
                templateUrl: '../views/updateGuest.html'
            })
    }
});

