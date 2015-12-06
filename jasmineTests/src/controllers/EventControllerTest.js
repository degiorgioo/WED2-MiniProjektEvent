//EventListControllerTests
define(['angular', 'angularMock', 'eventRepository', 'configuration'],
    function (Angular, AngularMock, EventRepository, Configuration) {

        var event, receivedEvent = null, eventRepository, $http, $httpBackend;

        beforeEach(AngularMock.inject(function($injector){

            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            eventRepository = new EventRepository($http, new Configuration());

            event = {"id":1,"name":"HSR-Party","description":"Party an der HSR","targetGroup":"Studenten","contributionsDescription":"Kuchen","location":{"name":"HSR","street":"Oberseestrasse","plz":8640,"city":"Rapperswil"},"times":{"begin":"2015-10-21T22:00:00.000Z","end":"2015-10-22T22:00:00.000Z"},"guests":[{"id":1,"name":"Michael","contribution":"Schoggi-Kuchen","comment":"Bin sicher zu früh","canceled":false},{"id":2,"name":"Hans","contribution":"Hotdog-Cake","comment":null,"canceled":false}],"maxNumberGuests":10};

            $httpBackend.when('GET','http://localhost:8080/api/events/1').respond(event);

        }));

        describe("EventController Test suite", function(){
            it("Get one Event", function(){
                    eventRepository.getEventById(1, function(data){
                        receivedEvent = data;
                    }, function(){});

                    $httpBackend.flush();
                    expect(receivedEvent).toEqual(event);
                }

            );

        });


    });
