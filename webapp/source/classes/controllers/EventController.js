//EventController
define([], function () {
    return function($scope, EventRepository, $routeParams){
        var eventId = $routeParams.eventId;

        $scope.getEventById = EventRepository.getEventById(eventId, function(data){
            $scope.event = data;
        });
    };
});
