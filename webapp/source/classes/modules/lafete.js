define(['angular', 'app/controllers/EventListController', 'app/controllers/EventController','app/controllers/NewEventController' ,'app/services/EventRepository', 'angularRoute'], function (Angular,EventListController,EventController,NewEventController,EventRepository) {

    var Lafete = Angular.module('lafete',['ngRoute']);

    //inject scopes for controllers
    EventListController.$inject = ['$scope', 'EventRepository'];
    EventController.$inject = ['$scope', 'EventRepository', '$routeParams'];
    NewEventController.$inject = ['$scope', 'EventRepository'];

    //set controllers
    Lafete.controller('EventListController', EventListController);
    Lafete.controller('EventController', EventController);
    Lafete.controller('NewEventController', NewEventController);

    //set service
    Lafete.service('EventRepository', EventRepository);

    //set Routes
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
            })
    });


    return Lafete;
});