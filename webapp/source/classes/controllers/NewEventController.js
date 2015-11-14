//NewEventController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository){
        //some kind of magic i don't know
        $scope.successfullAddNewEvent = false;
        $scope.errorAddNewEvent = false;

        $scope.addNewEventInRepo = function(){
            EventRepository.addEvent({
                id: '',
                name: $scope.eventname,
                description: $scope.description,
                targetGroup: $scope.target,
                location: {
                    name: $scope.locationname,
                    street: $scope.locationstreet,
                    plz: $scope.locationplz,
                    city: $scope.locationcity
                },
                times: {
                    begin: new Date($scope.eventbegin),
                    end: new Date($scope.eventend)
                }
            }, function(){
                $scope.successfullAddNewEvent = true;
            }, function(){
                $scope.errorAddNewEvent = true;
            });
        };

    };
});