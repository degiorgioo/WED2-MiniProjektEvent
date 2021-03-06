//NewGuestController
define(['Guest'], function (Guest) {

    var NewGuestController = function($scope, EventRepository, $routeParams){
        //some kind of magic..i don't know
        var eventID = $routeParams.eventId;
        this.scope = $scope;
        this.scope.guestAdded = false;
        this.scope.errorAddingGuest = false;
        this.scope.guest = new Guest();

        this.scope.addNewGuestToEvent = function(){
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