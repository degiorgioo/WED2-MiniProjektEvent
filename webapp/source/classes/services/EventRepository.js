define([], function () {
    return function ($http) {
        //do some magic here
        this.getAllEvents = function( successCallback ){
            $http.get( 'http://localhost:8080/api/events' )
                .success(function (data) {
                    successCallback(data.events);
                })
                .error(function () {
                    console.log("query not successfull");
                }
            );
        };

        this.getEventById = function( id , callback ){
            $http.get( 'http://localhost:8080/api/events/' + id )
                .success(function (data) {
                    callback(data);
                })
                .error(function () {
                    console.log("query not successfull");
                }
            );
        };

        this.addEvent = function(event, callback){
            $http.post( 'http://localhost:8080/api/events/', event).
                success(function(data){
                    console.log(data);
                    callback(true);
                }).
                error(function(data){
                    console.log(data);
                    callback(false);
                })
        };

        this.addGuestToEvent = function(id, guest, callback){
            $http.post('http://localhost:8080/api/events/'+ id +'/guests', guest)
                .success(function(data){
                    console.log(data);
                    callback(true);
                }).
                error(function(data){
                    console.log(data);
                    callback(false);
                });
        };

        this.updateEvent = function(id, event, callback){
            $http.post( 'http://localhost:8080/api/events/' + id, event).
                success(function(data){
                    console.log(data);
                    callback(true);
                }).
                error(function(data){
                    console.log(data);
                    callback(false);
                })
        }
    };
});