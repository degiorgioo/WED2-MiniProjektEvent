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

        this.getEventById = function( id , successCallback ){
            $http.get( 'http://localhost:8080/api/events/' + id )
                .success(function (data) {
                    successCallback(data);
                })
                .error(function () {
                    console.log("query not successfull");
                }
            );
        };

        this.addEvent = function(event){
            $http.post( 'http://localhost:8080/api/events/', event).
                success(function(data){
                    console.log(data);
                }).
                error(function(data){
                    console.log(data);
                })
        };

        this.addGuestToEvent = function(id, guest){
            console.log("i was here");
            $http.post('http://localhost:8080/api/events/'+ id +'/guests', guest)
                .success(function(data){
                    console.log(data);
                }).
                error(function(data){
                    console.log(data);
                });
        };

        this.updateEvent = function(id, event){
            $http.post( 'http://localhost:8080/api/events/' + id, event).
                success(function(data){
                    console.log(data);
                }).
                error(function(data){
                    console.log(data);
                })
        }
    };
});