define(['angular', 'app/controllers/EventListController', 'app/controllers/EventController','app/controllers/NewEventController' , 'app/controllers/UpdateEventController' ,'app/services/EventRepository', 'app/models/Event' ,'angularRoute'], function (Angular,EventListController,EventController,NewEventController,UpdateEventController,EventRepository, Event) {

    var Lafete = Angular.module('lafete',['ngRoute']);

    //inject scopes for controllers
    EventListController.$inject = ['$scope', 'EventRepository'];
    EventController.$inject = ['$scope', 'EventRepository', '$routeParams'];
    NewEventController.$inject = ['$scope', 'EventRepository'];
    UpdateEventController.$inject = ['$scope', 'EventRepository'];

    //set controllers
    Lafete.controller('EventListController', EventListController);
    Lafete.controller('EventController', EventController);
    Lafete.controller('NewEventController', NewEventController);
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
            })
    });

    return Lafete;
});