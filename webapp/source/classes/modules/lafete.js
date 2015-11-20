define(['angular', 'EventListController', 'EventController', 'NavigationController','NewEventController' , 'NewGuestController' ,'UpdateEventController','UpdateGuestController' ,'EventRepository','Routes' ,'angularRoute'], function (Angular,EventListController,EventController,NavigationController,NewEventController,NewGuestController,UpdateEventController, UpdateGuestController,EventRepository, Routes ) {

    var Lafete = Angular.module('lafete',['ngRoute']);

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
    Lafete.config(Routes);

    return Lafete;
});