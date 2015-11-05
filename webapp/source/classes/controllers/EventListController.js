//EventListController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository){
        $scope.getAllEvents = EventRepository.getAllEvents(function(data){
            $scope.events = data;
        });
    };
});
