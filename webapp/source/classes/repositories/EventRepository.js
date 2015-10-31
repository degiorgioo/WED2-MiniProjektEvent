define([], function () {
    return function ($http) {
        this.getAllEvents = function(successCallback){
            //do some magic here
            $http.get('http://localhost:8080/api/events')
                .success(function (data) {
                    successCallback(data.events);
                })
                .error(function () {
                    console.log("query not successfull");
                }
            );
        };
    };
});