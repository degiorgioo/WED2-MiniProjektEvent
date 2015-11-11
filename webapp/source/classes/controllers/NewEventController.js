//NewEventController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository){
        //some kind of magic i don't know

        $scope.newEventAdded = false;

        $scope.addNewEventInRepo = function(eventname, description, target, contribution ,locationname, locationstreet, locationplz, locationcity, eventbegin, eventend){
            EventRepository.addEvent({
                id: '',
                name: eventname,
                description: description,
                targetGroup: target,
                contributionDescription: contribution,
                location: {
                    name: locationname,
                    street: locationstreet,
                    plz: locationplz,
                    city: locationcity
                },
                times: {
                    begin: new Date(eventbegin),
                    end: new Date(eventend)
                }
            }, function(successfullOrNot){
                $scope.newEventAdded = successfullOrNot;
            });
        };

    };
});