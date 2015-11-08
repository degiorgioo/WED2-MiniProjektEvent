//EventListController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository){
        EventRepository.getAllEvents(function(data){
            $scope.events = data;
        });
    };
});
