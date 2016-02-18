// Make a Person.js

// getFirstName(), getLastName(), getFullName(), setFirstName(first), setLastName(last), and setFullName(firstAndLast).

// object constructor
var Person = function(firstAndLast) {

    this.getFirstName = function(){
      return firstAndLast.split(' ')[0];
    };

    this.getLastName = function(){
      return firstAndLast.split(' ')[1];
    };

    this.getFullName = function(){
      return firstAndLast;
    };

    this.setFirstName = function(first){
      firstAndLast = first + " " + firstAndLast.split(' ')[1];

    };
    this.setLastName = function(last){
      firstAndLast = firstAndLast.split(' ')[0] + " " + last;

    };
    this.setFullName = function(name){
      firstAndLast = name;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();

// Object.keys(bob).length should return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
// bob.getFirstName() should return "Bob".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Bob Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry").
