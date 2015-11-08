//EventController
define([], function () {
    return function(eventname, description, target, locationname, locationstreet, locationplz, locationcity, eventbegin, eventend){
            this.id = '',
            this.name = eventname,
            this.description = description,
            this.targetGroup = target,
            this.contributionsDescription = '',
            this.location = {name: locationname, street: locationstreet, zipCode: locationplz, city: locationcity};
            this.times = {begin: eventbegin, end: eventend};
            this.guests = [];
            this.print = function(){
                console.log("printEvent");
            }
    };

});
