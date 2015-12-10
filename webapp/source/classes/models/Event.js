//Event
define([], function () {

    var Event = function(){
            this.name = '';
            this.target = '';
            this.description = "";
            this.targetGroup = "";
            this.location = {name: "", street: "", zipCode: "", city: ""};
            this.times = {};
            this.times.begin = new Date();
            this.times.end = new Date();
            this.guests = [];
    };


    return Event;

});