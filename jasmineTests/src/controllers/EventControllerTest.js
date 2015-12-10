//EventListControllerTests
define(['angular', 'angularMock', 'eventRepository','configuration'],
    function (Angular, AngularMock, EventRepository, Configuration) {

        var events, receivedEvent = null, eventRepository1 ,eventRepository2, $http, $httpBackend, $scope;

        beforeEach(AngularMock.inject(function($injector){

            $http = $injector.get('$http');
            $httpBackend = $injector.get('$httpBackend');
            $scope = $injector.get('$rootScope').$new();
            eventRepository1 = new EventRepository($http, new Configuration());

            events = [{"id":1,"name":"HSR-Party","description":"Party an der HSR","targetGroup":"Studenten","contributionsDescription":"Kuchen","location":{"name":"HSR","street":"Oberseestrasse","plz":8640,"city":"Rapperswil"},"times":{"begin":"2015-10-21T22:00:00.000Z","end":"2015-10-22T22:00:00.000Z"},"guests":[{"id":1,"name":"Michael","contribution":"Schoggi-Kuchen","comment":"Bin sicher zu früh","canceled":false},{"id":2,"name":"Hans","contribution":"Hotdog-Cake","comment":null,"canceled":false}],"maxNumberGuests":10},{"id":2,"name":"Dinner","description":"Mitarbeiterdinner der HSR","targetGroup":"HSR Mitarbeiter","contributionsDescription":null,"location":{"name":"HSR","street":"Oberseestrasse","plz":8640,"city":"Rapperswil"},"times":{"begin":"2015-10-21T22:00:00.000Z","end":"2015-10-22T22:00:00.000Z"},"guests":[{"id":3,"name":"F. Meier","contribution":null,"comment":null,"canceled":false}],"maxNumberGuests":10}];

            eventRepository2 = {
                all: function(onSuccess){
                    onSuccess(events);
                }
            };

            $httpBackend.when('GET','http://localhost:8080/api/events/1').respond(events[0]);

        }));

        describe("EventController Test suite", function(){
            it("Get one Event", function(){
                    eventRepository1.getEventById(1, function(data){
                        receivedEvent = data;
                    }, function(){});

                    $httpBackend.flush();
                    expect(receivedEvent).toEqual(events[0]);
                }

            );
            it("Scope test: All Events", function(){
                    eventRepository2.all(function(data){
                        $scope.receivedEvent = data;
                    }, function(){});

                    expect($scope.receivedEvent.length).toEqual(2);
                }
            );
            it("Scope test: Event 1", function(){
                    eventRepository2.all(function(data){
                        $scope.receivedEvents = data;
                    }, function(){});

                    expect($scope.receivedEvents[0]).toEqual(events[0]);
                }
            );

        });


    });
