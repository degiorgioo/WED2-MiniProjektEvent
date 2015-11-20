//NewGuestController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository, $routeParams){
        $scope.guestUpdated = false;
        $scope.errorUpdatingGuest = false;
        EventRepository.getGuestById($routeParams.eventId, $routeParams.guestId,function(guest){
            console.log(guest);
            $scope.guest = guest;
        } );

        $scope.UpdateGuestInformation = function(){
            EventRepository.updateGuest($routeParams.eventId, $routeParams.guestId, {
                name: $scope.guest.name,
                contribution: $scope.guest.contribution,
                comment: $scope.guest.comment
            }, function(){
                $scope.guestUpdated = true;
                $scope.errorUpdatingGuest = false;

            }, function(){
                $scope.errorUpdatingGuest = true;
                $scope.guestUpdated = false;
            })
        }
    };
});