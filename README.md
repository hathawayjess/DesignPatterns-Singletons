(JavaScript Design Patterns)

**Singletons**
==============


**DEFINITION:**

	

> *Ensure a class only has one instance and provide a global point of access to it. In other words, an object which can only be instantiated one time. Repeated calls to its constructor return the same instance.*

It's *usually* smart to avoid global variables and objects, because they break what is called encapsulation (the idea that the data of an object should not be exposed). Encapsulation is important because when you accidentally write code that accesses or modifies older code, your app can break and debugging will become a nightmare. 

However, there are certain cases where a global object is useful. That is where **singletons** come into play.



**ADVANTAGES:**

 - Reduced memory footprint
 - Single point of access
 - Delayed initialization 

**DISADVANTAGES:**

 - Once instantiated, hardly ever "reset"
 - Harder to unit test, may introduce hidden dependencies


==============
          var Singleton = (function () {
    	    var instance;
    		function createInstance() {
    	        var object = new Object("I am the instance");
    	        return object;
    	    }
     
    	    return {
    	        getInstance: function () {
    	            if (!instance) {
    	                instance = createInstance();
    	            }
    	            return instance;
    	        }
    	    };
        })();
        
        function run() {
     
    	    var instance1 = Singleton.getInstance();
    	    var instance2 = Singleton.getInstance();
     
    	    alert("Same instance? " + (instance1 === instance2));  //returns true
        }




You may recognize other design patterns within this singleton. Singletons are a specialization of the **Module** pattern. The Module pattern is the basis of all popular JavaScript libraries (jQuery, Backbone, Ember, etc.). This example is also implemented as an **IIFE** (immediately invoked function expression). 

Let's talk about the *getInstance* method. It is the singleton's globally accessible gatekeeper. It's also demonstrating another common design pattern called **Lazy Load**, which will check if an instance has already been created. If it hasn't, it will create one and store (cache) it for future reference. This saves CPU and memory by creating objects only when necessary.

As you can see if you run the code, *instance1* and *instance2* are referring to the exact same instance, as opposed to a copy of it.



**WHEN SHOULD I USE A SINGLETON?**

*A Singleton candidate must satisfy these three requirements:*

>  1. controls concurrent access to a shared resource
>  2. access to the resource will be requested from multiple, disparate parts of the system
>  3. there can only be one object




**SINGLETONS IN THE WILD!**


>  **Singletons can be found in these libraries:**
>  
>  - [jQuery](https://jquery.com/) - $ symbol is a Singleton
>  - [AngularJS](https://angularjs.org/) - services are Singletons
>  - [ReactJS/Flux](http://reactjs.net/) - dispatcher is a Singleton
> 
> **Other common uses:**
> 

> - database connections
 >- data loggers
 >- configuration files
 >- printer spooler
 >- device controllers




**Additional Resources:**

https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript
http://www.dofactory.com/javascript/singleton-design-pattern
http://robdodson.me/javascript-design-patterns-singleton/
http://blog.mgechev.com/2014/04/16/singleton-in-javascript/



