//Event
define([], function () {

    var Event = function(name, description, targetGroup, locationname,locationstreet,locationzip, locationcity,timesbegin, timesend, guests, maxGuests){
            this.name = name;
            this.description = description;
            this.targetGroup = targetGroup;
            this.location = {name: locationname, street: locationstreet, zipCode: locationzip, city: locationcity};
            this.times = {};
            this.times.begin = timesbegin;
            this.times.end = timesend;
            this.guests = [];
            this.maxGuests = maxGuests;
    };

    Event.EventFactoryCreateEvent = function(eventAsString) {
        var event = {
            name: eventAsString.name,
            description: eventAsString.description,
            targetGroup: eventAsString.targetGroup,
            contributionDescription: eventAsString.contributionDescription,
            guests: eventAsString.guests,
            id: eventAsString.id,
            location: eventAsString.location,
            maxNumberGuests: eventAsString.maxNumberGuests,
            target: eventAsString.target,
            times: {
                begin: new Date(eventAsString.times.begin),
                end: new Date(eventAsString.times.end)
            }
        };
        return event;
    };

    Event.EventFactoryCreateEventFromArray = function(eventsAsReceivedAsArray){
        var convertedEventsArray = [];
        eventsAsReceivedAsArray.forEach(function(event){
            var convertedEvent = Event.EventFactoryCreateEvent(event);
            convertedEventsArray.push(convertedEvent);
        });
        return convertedEventsArray;
    };
    return Event;
});