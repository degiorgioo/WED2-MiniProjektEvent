//NewEventController
define(['Event'], function (Event) {
    var NewEventController = function($scope, EventRepository){
        $scope.successfullAddNewEvent = false;
        $scope.errorAddNewEvent = false;
        $scope.event = new Event();
        this.scope = $scope;

        this.scope.addNewEventInRepo = function(){
            EventRepository.addEvent($scope.event, function()
            {
                $scope.successfullAddNewEvent = true;
            }, function(){
                $scope.errorAddNewEvent = true;
            });
        };
    };

    NewEventController.$inject = ['$scope', 'EventRepository'];

    return NewEventController;
});