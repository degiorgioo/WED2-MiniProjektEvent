//NewGuestController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository, $routeParams){
        showMessage();
        EventRepository.getGuestById($routeParams.eventId, $routeParams.guestId,function(guest){
            console.log(guest);
            $scope.guest = guest;
        } );

        $scope.updateGuestInformation = function(){
            EventRepository.updateGuest($routeParams.eventId, $routeParams.guestId, {
                name: $scope.guest.name,
                contribution: $scope.guest.contribution,
                comment: $scope.guest.comment
            }, function(){
                showMessage('guestUpdated');

            }, function(){
                showMessage('errorUpdatingGuest');
            })
        };
        $scope.cancelGuest = function(){
            EventRepository.cancelGuest($routeParams.eventId, $routeParams.guestId, {
                canceled: true
            }, function(){
                showMessage('guestCanceled');
            }, function(){
                showMessage('errorCancelingGuest');
            })
        };

        function showMessage(message){
            $scope.guestUpdated = false;
            $scope.errorUpdatingGuest = false;
            $scope.errorCancelingGuest = false;
            $scope.guestCanceled = false;
            switch(message){
                case 'guestUpdated':
                    $scope.guestUpdated = true;
                    break;
                case 'guestCanceled':
                    $scope.guestCanceled = true;
                    break;
                case 'errorUpdatingGuest':
                    $scope.errorUpdatingGuest = true;
                    break;
                case 'errorCancelingGuest':
                    $scope.errorCancelingGuest = true;
                    break;
            }
        }
    };
});