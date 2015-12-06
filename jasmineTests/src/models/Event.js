//Event
define([], function () {

    var Event = function(){
            this.name = '';
            this.target = '';
            this.description = "";
            this.targetGroup = "";
            this.location = {name: "", street: "", zipCode: "", city: ""};
            this.times = {begin: "", end: ""};
            this.guests = [];
    };

    return Event;

});