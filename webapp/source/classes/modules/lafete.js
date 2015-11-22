define(['angular', 'NavigationController','EventRepository','ModuleConfiguration','Routes' ,'angularRoute'], function (Angular,NavigationController,EventRepository, ModuleConfiguration ,Routes ) {

    var Lafete = Angular.module('lafete',['ngRoute']);

    //set controllers
    Lafete.controller('NavigationController', NavigationController);

    // set service
    Lafete.service('EventRepository', EventRepository);
    Lafete.service('ModuleConfiguration', ModuleConfiguration);

    //set routes
    Lafete.config(Routes);

    return Lafete;
});