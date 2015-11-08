//UpdateEventController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository){
        EventRepository.getAllEvents(function(data){
            $scope.events = data;
            $scope.event = data[0];
            $scope.event.times.begin = new Date(data[0].times.begin);
            $scope.event.times.end = new Date(data[0].times.end);
        });


        $scope.pinCurrentEventToScope = function(event){
            $scope.event = event;
            console.log($scope.event);
            console.log(new Date($scope.event.times.begin));

        };

        $scope.updateEventInformation = function(){
            EventRepository.updateEvent($scope.event.id, {
                id: $scope.event.id,
                name: $scope.event.name,
                description: $scope.event.description,
                targetGroup: $scope.event.targetGroup,
                contributionDescription: $scope.event.contributionDescription,
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
            });
        }
    };
});