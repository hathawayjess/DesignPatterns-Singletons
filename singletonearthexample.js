Say we wanted to create an earth object 


var NAMESPACE = function () {

    var privateFunction1 = function () {
        privateFunction2();
    };

    var privateFunction2 = function () {
        alert('I\'m private!');
    };

    var Constructors = {};

    Constructors.PlanetEarth = function () {
        privateFunction1();
        privateFunction2();
    };

    Constructors.PlanetEarth.prototype = {
        someMethod: function () {
            if (console && console.log) {
                console.log('some method');             
            }
        }
    };

    Constructors.Person = function (name, address) {
        this.name = name;
        this.address = address;
    };

    Constructors.Person.prototype = {
        walk: function () {
            alert('STOMP!');
        }
    };

    return {
        Person: Constructors.Person, // there can be many
        PlanetEarth: new Constructors.PlanetEarth() // there can only be one!
    };

}();







------------------------------------------------------------------------------



//Why would we use a constructor and prototyping for a single object? 
//Why not just use this?


var earth= {
    someMethod: function () {
        if (console && console.log)
            console.log('some method');                             
    }
};
privateFunction1();
privateFunction2();

return {
    Person: Constructors.Person,
    PlanetEarth: earth
};


//Because if this is included in the page twice, the latest object will overwrite the earlier
//object. In practice, it happens - sometimes with unexpected consequences. Singleton closure
//pattern will prevent this. If you distribute a script/library, it will gracefully handle
//misuse by others who use it. Most of Google's API libraries do this for just that reason.
//Say I use Google Maps on a site, but want to install a widget by some third party which also
//includes the maps library explicitly. Should I have to change third party code, or should the 
//library itself gracefully handle this?