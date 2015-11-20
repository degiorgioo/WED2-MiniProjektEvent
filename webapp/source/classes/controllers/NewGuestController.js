//NewGuestController
define([], function () {

    var NewGuestController = function($scope, EventRepository, $routeParams){
        //some kind of magic..i don't know
        var eventID = $routeParams.eventId;
        $scope.guestAdded = false;
        $scope.errorAddingGuest = false;

        $scope.addNewGuestToEvent = function(guestname, contribution, comment){
            EventRepository.addGuestToEvent(eventID, {
                name: guestname,
                contribution: contribution,
                comment: comment
            }, function(){
                $scope.guestAdded = true;
            }, function(){
                $scope.errorAddingGuest = true;
            })
        }
    };

    NewGuestController.$inject = ['$scope', 'EventRepository', '$routeParams'];

    return NewGuestController;
});