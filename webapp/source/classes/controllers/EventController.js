//EventController
define([], function () {
    return function($scope, EventRepository, $routeParams){
        var eventId = $routeParams.eventId;

        $scope.errorLoadEvent = false;

        $scope.getEventById = EventRepository.getEventById(eventId, function(data){
            $scope.event = data;
            $scope.numberOfGuests = data.guests.length;
        }, function(){
            $scope.errorLoadEvent = true;
        });


    };
});
