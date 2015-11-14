//EventListController
define(['app/services/EventRepository'], function () {
    return function($scope, EventRepository, $location){

        $scope.errorGetAllEvents = false;

        EventRepository.getAllEvents(function(data){
            $scope.events = data;
        }, function () {
            $scope.errorGetAllEvents = true;
        });

        $scope.onClickEventContainer = function(){
            $location.path('event/' + this.event.id);
        }

    };
});
