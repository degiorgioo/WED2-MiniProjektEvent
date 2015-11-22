//Routes
define(['EventListController','EventController', 'NewEventController' , 'NewGuestController' ,'UpdateEventController','UpdateGuestController'], function (EventListController ,EventController, NewEventController, NewGuestController ,UpdateEventController,UpdateGuestController) {

    var Routes = function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../../views/events.html',
                controller: EventListController
            }).when('/event/:eventId', {
                controller: EventController,
                templateUrl: '../../views/eventDetails.html'
            }).when('/newEvent', {
                controller: NewEventController,
                templateUrl: '../../views/newEvent.html'
            }).when('/updateEvent', {
                controller: UpdateEventController,
                templateUrl: '../../views/updateEvent.html'
            }).when('/newGuest/Event/:eventId', {
                controller: NewGuestController,
                templateUrl: '../../views/newGuest.html'
            }).when('/updateGuest/Event/:eventId/Guest/:guestId', {
                controller: UpdateGuestController,
                templateUrl: '../../views/updateGuest.html'
            })
    };

    Routes.$inject=['$routeProvider'];

    return Routes;
});

