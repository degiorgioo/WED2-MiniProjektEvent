//UpdateEventController
define([], function () {
    var UpdateEventController =  function($scope, EventRepository){

        $scope.successfullEventUpdated = false;
        $scope.errorUpdatingEvent = false;

        EventRepository.getAllEvents(function(data){
            $scope.events = data;
            $scope.event = data[0];
            $scope.event.times.begin = new Date(data[0].times.begin);
            $scope.event.times.end = new Date(data[0].times.end);
        });


        $scope.pinCurrentEventToScope = function(event){
            $scope.event = event;
            $scope.event.times.begin = new Date(event.times.begin);
            $scope.event.times.end = new Date(event.times.end);
        };

        $scope.updateEventInformation = function(){
            EventRepository.updateEvent($scope.event.id, {
                id: $scope.event.id,
                name: $scope.event.name,
                description: $scope.event.description,
                targetGroup: $scope.event.targetGroup,
                maxNumberGuests: $scope.event.maxNumberGuests,
                location: {
                    name: $scope.event.location.name,
                    street: $scope.event.location.street,
                    plz: $scope.event.location.plz,
                    city: $scope.event.location.city
                },
                times: {
                    begin: new Date($scope.event.times.begin),
                    end: new Date($scope.event.times.end)
                }
            }, function(){
                $scope.successfullEventUpdated = true;
            }, function(){
                $scope.errorUpdatingEvent = true;
            });
        }
    };

    UpdateEventController.$inject = ['$scope', 'EventRepository'];

    return UpdateEventController;
});