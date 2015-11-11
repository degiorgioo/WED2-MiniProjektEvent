define(['angular', 'app/controllers/EventListController', 'app/controllers/EventController','app/controllers/NewEventController' , 'app/controllers/NewGuestController' ,'app/controllers/UpdateEventController' ,'app/services/EventRepository', 'app/models/Event' ,'angularRoute'], function (Angular,EventListController,EventController,NewEventController,NewGuestController,UpdateEventController,EventRepository, Event) {

    var Lafete = Angular.module('lafete',['ngRoute']);

    //inject scopes for controllers
    EventListController.$inject = ['$scope', 'EventRepository', '$location'];
    EventController.$inject = ['$scope', 'EventRepository', '$routeParams'];
    NewEventController.$inject = ['$scope', 'EventRepository'];
    NewGuestController.$inject = ['$scope', 'EventRepository', '$routeParams'];
    UpdateEventController.$inject = ['$scope', 'EventRepository'];

    //set controllers
    Lafete.controller('EventListController', EventListController);
    Lafete.controller('EventController', EventController);
    Lafete.controller('NewEventController', NewEventController);
    Lafete.controller('NewGuestController', NewGuestController);
    Lafete.controller('UpdateEventController', UpdateEventController);

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
            })
    });

    return Lafete;
});