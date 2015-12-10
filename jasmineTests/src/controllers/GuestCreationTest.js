//NewEventControllerTests
define(['angular', 'angularMock', 'newGuestController', 'Guest'],
    function (Angular, AngularMock, NewGuestController, Guest) {

    var newGuestController, eventRepository ,$scope, testsuccessfull = false;

    beforeEach(AngularMock.inject(function($injector){

        $scope = $injector.get("$rootScope").$new();

        eventRepository = {
            addGuestToEvent : function(guest){
                testsuccessfull = true;
            }
        };

        newGuestController = new NewGuestController($scope, eventRepository, {});

    }));

    describe("NewGuestController Test suite", function(){
       it("Create Guest", function(){
           newGuestController.scope.guest.name = "name";
           newGuestController.scope.guest.comment = "comment";
           newGuestController.scope.guest.contribution = "contr";
           newGuestController.scope.guest.comment = "comment";

           newGuestController.scope.addNewGuestToEvent(newGuestController.scope.guest);
           expect(testsuccessfull).toEqual(true);

       }
    );

    });
});