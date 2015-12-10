//EventListControllerTests
define(['angular', 'angularMock', 'eventRepository', 'configuration'],
    function (Angular, AngularMock, EventRepository, Configuration) {

    var eventList, receivedEventList = null, receivedGuest = null, receivedEvent = null, eventRepository, $http, $httpBackend;

    beforeEach(AngularMock.inject(function($injector){

        $http = $injector.get('$http');
        $httpBackend = $injector.get('$httpBackend');
        eventRepository = new EventRepository($http, new Configuration());

        eventList = [{"id":1,"name":"HSR-Party","description":"Party an der HSR","targetGroup":"Studenten","contributionsDescription":"Kuchen","location":{"name":"HSR","street":"Oberseestrasse","plz":8640,"city":"Rapperswil"},"times":{"begin":"2015-10-21T22:00:00.000Z","end":"2015-10-22T22:00:00.000Z"},"guests":[{"id":1,"name":"Michael","contribution":"Schoggi-Kuchen","comment":"Bin sicher zu früh","canceled":false},{"id":2,"name":"Hans","contribution":"Hotdog-Cake","comment":null,"canceled":false}],"maxNumberGuests":10},{"id":2,"name":"Dinner","description":"Mitarbeiterdinner der HSR","targetGroup":"HSR Mitarbeiter","contributionsDescription":null,"location":{"name":"HSR","street":"Oberseestrasse","plz":8640,"city":"Rapperswil"},"times":{"begin":"2015-10-21T22:00:00.000Z","end":"2015-10-22T22:00:00.000Z"},"guests":[{"id":3,"name":"F. Meier","contribution":null,"comment":null,"canceled":false}],"maxNumberGuests":10}];

        $httpBackend.when('GET','http://localhost:8080/api/events').respond({events: eventList});
        $httpBackend.when('GET','http://localhost:8080/api/events/1').respond(eventList[0]);
        $httpBackend.when('GET','http://localhost:8080/api/events/1/guests/1').respond(eventList[0].guests[0]);

    }));

    describe("Event Repository Tests", function(){
       it("Show All Events", function(){
           eventRepository.getAllEvents(function(data){
               receivedEventList = data;
           }, function(){});

           $httpBackend.flush();
           expect(receivedEventList.length).toEqual(eventList.length);
       });
        it("Show One Event", function(){
            eventRepository.getEventById(1, function(data){
                receivedEvent = data;
            }, function(){});

            $httpBackend.flush();
            expect(receivedEvent.name).toEqual(eventList[0].name);
        });
        it("Show One Guest of Event", function(){
            eventRepository.getGuestById(1, 1, function(data){
                receivedGuest = data;
            }, function(){});

            $httpBackend.flush();
            expect(receivedGuest.name).toEqual(eventList[0].guests[0].name);
        });

    });


});
