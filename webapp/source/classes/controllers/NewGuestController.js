//NewGuestController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository, $routeParams){
        //some kind of magic..i don't know
        var eventID = $routeParams.eventId;
        $scope.guestAdded = false;

        $scope.addNewGuestToEvent = function(guestname, contribution, comment){
            EventRepository.addGuestToEvent(eventID, {
                name: guestname,
                contribution: contribution,
                comment: comment
            }, function(successfullOrNot){
                $scope.guestAdded = successfullOrNot;
            })
        }
    };
});