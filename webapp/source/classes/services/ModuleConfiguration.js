//ModuleConfiguration -> Service
define([], function(){

    var moduleConfiguration = function(){
        this.protocol =  'http://';
        this.serverName =  "localhost";
        this.port = ":8080";
        this.apiUrl = "/api/";
        this.eventAPI = this.protocol + this.serverName + this.port + this.apiUrl + "events/";
    };

    return moduleConfiguration;

});