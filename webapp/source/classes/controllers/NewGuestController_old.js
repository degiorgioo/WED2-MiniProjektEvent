//NewGuestController
define(['Guest'], function (Guest) {

    var NewGuestController = function($scope, EventRepository, $routeParams){
        //some kind of magic..i don't know
        var eventID = $routeParams.eventId;
        $scope.guestAdded = false;
        $scope.errorAddingGuest = false;
        $scope.guest = new Guest();

        $scope.addNewGuestToEvent = function(){
            EventRepository.addGuestToEvent(eventID, $scope.guest, function(){
                $scope.guestAdded = true;
            }, function(){
                $scope.errorAddingGuest = true;
            })
        }
    };

    NewGuestController.$inject = ['$scope', 'EventRepository', '$routeParams'];

    return NewGuestController;
});