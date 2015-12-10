define([], function () {
    var EventRepository = function ($http, config) {
        this.getAllEvents = function( successCallback, errorCallback ){
            $http.get( config.eventAPI )
                .success(function (data) {
                    //data.events.times.end = new Date(data.times.end);
                    //data.events.times.begin = new Date(data.times.begin);
                    //console.log(data);

                    for(var i = 0; i < data.events.length; i++){
                        data.events[i].times.begin = new Date(data.events[i].times.begin);
                        data.events[i].times.end = new Date(data.events[i].times.end);
                    }
                    console.log(data);

                    successCallback(data.events);
                })
                .error(function () {
                    errorCallback();
                }
            );
        };

        this.getEventById = function( id , successCallback, errorCallback ){
            $http.get( config.eventAPI + id )
                .success(function (data) {
                    data.times.end = new Date(data.times.end);
                    data.times.begin = new Date(data.times.begin);
                    console.log(data);
                    successCallback(data);
                })
                .error(function () {
                    errorCallback();
                }
            );
        };

        this.getGuestById = function( eventId, guestId, successCallback, errorCallback ){
            $http.get( config.eventAPI + eventId + '/guests/' + guestId).
            success(function(data){
                successCallback(data);
            }).
            error(function(){
                errorCallback();
            })
        };

        this.addEvent = function(event, successCallback, errorCallback ){
            $http.post( config.eventAPI , event).
                success(function(){
                    successCallback();
                }).
                error(function(){
                    errorCallback();
                })
        };

        this.addGuestToEvent = function(id, guest, successCallback, errorCallback ){
            $http.post(config.eventAPI + id +'/guests', guest)
                .success(function(){
                    successCallback();
                }).
                error(function(){
                    errorCallback();
                });
        };

        this.updateEvent = function(id, event, successCallback, errorCallback ){
            $http.post( config.eventAPI + id, event).
                success(function(){
                    successCallback();
                }).
                error(function(){
                    errorCallback();
                })
        };
        this.updateGuest = function( eventId, guestId, guest, successCallback, errorCallback ){
            $http.post( config.eventAPI + eventId + '/guests/' + guestId, guest).
            success(function(){
                successCallback();
            }).
            error(function(){
                errorCallback();
            })
        };
    };

    EventRepository.$inject=['$http', 'ModuleConfiguration'];

    return EventRepository;

});