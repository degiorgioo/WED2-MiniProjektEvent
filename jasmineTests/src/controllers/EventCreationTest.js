//NewEventControllerTests
define(['angular', 'angularMock', 'newEventController', 'Event'],
    function (Angular, AngularMock, NewEventController, Event) {

    var newEventController, eventRepository ,$scope, testsuccessfull = false;

    beforeEach(AngularMock.inject(function($injector){

        $scope = $injector.get("$rootScope").$new();

        eventRepository = {
            addEvent : function(event){
                testsuccessfull = true;
            }
        };


        newEventController = new NewEventController($scope, eventRepository);

        console.log(newEventController.scope);
    }));

    describe("NewEventController Test suite", function(){
       it("Create Event", function(){

               newEventController.scope.event = new Event();
               newEventController.scope.event.name = "name";
               newEventController.scope.event.target = "target";
               newEventController.scope.event.description = "desc";
               newEventController.scope.event.targetGroup = "targetGroup";
               newEventController.scope.event.location = {};
               newEventController.scope.event.times = {};
               newEventController.scope.event.guests = [];
               newEventController.scope.addNewEventInRepo(newEventController.scope.event);
               expect(testsuccessfull).toEqual(true);

       }
    );

    });
});