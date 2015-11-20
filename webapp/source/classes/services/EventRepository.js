define([], function () {
    return function ($http) {
        //do some magic here
        this.getAllEvents = function( successCallback, errorCallback ){
            $http.get( 'http://localhost:8080/api/events' )
                .success(function (data) {
                    successCallback(data.events);
                })
                .error(function () {
                    errorCallback();
                }
            );
        };

        this.getEventById = function( id , successCallback, errorCallback ){
            $http.get( 'http://localhost:8080/api/events/' + id )
                .success(function (data) {
                    successCallback(data);
                })
                .error(function () {
                    errorCallback();
                }
            );
        };

        this.getGuestById = function( eventId, guestId, successCallback, errorCallback ){
            $http.get( 'http://localhost:8080/api/events/' + eventId + '/guests/' + guestId).
            success(function(data){
                successCallback(data);
            }).
            error(function(){
                errorCallback();
            })
        };

        this.addEvent = function(event, successCallback, errorCallback ){
            $http.post( 'http://localhost:8080/api/events/', event).
                success(function(){
                    successCallback();
                }).
                error(function(){
                    errorCallback();
                })
        };

        this.addGuestToEvent = function(id, guest, successCallback, errorCallback ){
            $http.post('http://localhost:8080/api/events/'+ id +'/guests', guest)
                .success(function(){
                    successCallback();
                }).
                error(function(){
                    errorCallback();
                });
        };

        this.updateEvent = function(id, event, successCallback, errorCallback ){
            $http.post( 'http://localhost:8080/api/events/' + id, event).
                success(function(){
                    successCallback();
                }).
                error(function(){
                    errorCallback();
                })
        };
        this.updateGuest = function( eventId, guestId, guest, successCallback, errorCallback ){
            $http.post( 'http://localhost:8080/api/events/' + eventId + '/guests/' + guestId, guest).
            success(function(){
                successCallback();
            }).
            error(function(){
                errorCallback();
            })
        };
    };
});