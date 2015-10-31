define(['angular', 'app/controllers/EventListController', 'app/repositories/EventRepository'], function (Angular, EventListController, EventRepository) {

    var Lafete = Angular.module('lafete', []);

    //inject scopes for EventListController
    EventListController.$inject = ['$scope', 'EventRepository'];

    //set controller
    Lafete.controller('EventListController', EventListController);

    //set service
    Lafete.service('EventRepository', EventRepository);

    return Lafete;
});