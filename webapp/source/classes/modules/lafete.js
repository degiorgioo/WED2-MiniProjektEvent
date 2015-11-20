define(['angular', 'app/controllers/EventListController', 'app/controllers/EventController', 'app/controllers/NavigationController','app/controllers/NewEventController' , 'app/controllers/NewGuestController' ,'app/controllers/UpdateEventController','app/controllers/UpdateGuestController' ,'app/services/EventRepository', 'app/models/Event' ,'angularRoute'], function (Angular,EventListController,EventController,NavigationController,NewEventController,NewGuestController,UpdateEventController, UpdateGuestController,EventRepository, Event) {

    var Lafete = Angular.module('lafete',['ngRoute']);

    //inject scopes for controllers
    EventListController.$inject = ['$scope', 'EventRepository', '$location'];
    EventController.$inject = ['$scope', 'EventRepository', '$routeParams'];
    NewEventController.$inject = ['$scope', 'EventRepository'];
    NewGuestController.$inject = ['$scope', 'EventRepository', '$routeParams'];
    UpdateEventController.$inject = ['$scope', 'EventRepository'];
    UpdateGuestController.$inject = ['$scope', 'EventRepository', '$routeParams'];
    NavigationController.$inject = ['$scope'];

    //set controllers
    Lafete.controller('EventListController', EventListController);
    Lafete.controller('EventController', EventController);
    Lafete.controller('NewEventController', NewEventController);
    Lafete.controller('NewGuestController', NewGuestController);
    Lafete.controller('UpdateEventController', UpdateEventController);
    Lafete.controller('NavigationController', NavigationController);
    Lafete.controller('UpdateGuestController', UpdateGuestController);

    //set service
    Lafete.service('EventRepository', EventRepository);

    //set routes
    Lafete.config(function($routeProvider){
        $routeProvider.
            when('/',{
                controller: 'EventListController',
                templateUrl: '../views/events.html'
            })
            .when('/event/:eventId', {
                controller: 'EventController',
                templateUrl: '../views/eventDetails.html'
            })
            .when('/newEvent', {
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
    });

    return Lafete;
});