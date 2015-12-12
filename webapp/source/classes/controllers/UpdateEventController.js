//UpdateEventController
define(['Event'], function (Event) {

    var UpdateEventController =  function($scope, EventRepository){

        $scope.successfullEventUpdated = false;
        $scope.errorUpdatingEvent = false;

        EventRepository.getAllEvents(function(data){
            $scope.events = data;
            $scope.event = data[0];
        });


        $scope.pinCurrentEventToScope = function(event){
            $scope.event = Event.EventFactoryCreateEvent(event);
        };

        $scope.updateEventInformation = function(){
            EventRepository.updateEvent($scope.event.id, new Event(
                $scope.event.name,
                $scope.event.description,
                $scope.event.targetGroup,
                $scope.event.location.name,
                $scope.event.location.street,
                $scope.event.location.plz,
                $scope.event.location.city,
                $scope.event.times.begin,
                $scope.event.times.end,
                $scope.event.maxNumberGuests
            ), function(){
                $scope.successfullEventUpdated = true;
            }, function(){
                $scope.errorUpdatingEvent = true;
            });
        }
    };

    UpdateEventController.$inject = ['$scope', 'EventRepository'];

    return UpdateEventController;
});