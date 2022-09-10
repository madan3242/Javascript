function anotherAddEventListener(typeOfEvent, callback){

    //Detect Event Code...
    var eventThatHappened = {
        eventType : "keydown",
        key : "p",
        durationOfKeyPress : 2
    }
    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}

anotherAddEventListener("keypress", function(event){
    console.log(event);
})