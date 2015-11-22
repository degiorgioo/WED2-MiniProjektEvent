define([], function () {
    var EventRepository = function ($http, config) {
        this.getAllEvents = function( successCallback, errorCallback ){

            $http.get( config.eventAPI )

                .success(function (data) {
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