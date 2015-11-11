//EventListController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository, $location){
        EventRepository.getAllEvents(function(data){
            $scope.events = data;
        });

        $scope.onClick = function(){
            console.log(this.event.id);
            $location.path('event/' + this.event.id);
        }

    };
});
