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
    };
});