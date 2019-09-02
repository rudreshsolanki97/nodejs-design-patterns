"use strict"; // cannot use undeclared variable
// Main JS file for the codesnippets in the chapter 1: Welcome to Nodejs
var newVariable = "test";

// let, const & var

if (false) {
  var x = 1;
  let y = 2;
  const z = 3;
}
console.log(x); // this will print "undefined"
// console.log(y); // this will print "reference error"
// console.log(z); // thi will print "reference error"

const objectX = {};
objectX.name = "Rudresh Solanki"; // const only make the bind const not the actual value; only prevents re-assigning
console.log(objectX);

// To create an immutable object use deep-freeze or Object.freeze()
const obj1 = { property1: "initial_data" };
const obj2 = Object.freeze(obj1);
// obj2.property1 = "new_data"; // this will throw error if using "use strict"
console.log(obj2.property1);

// Arrow function is used majorly to handle callbacks for hte nodejs functions
// Note: Arrow functions are bound to their lexical scope
function DelayedGreeting(name) {
  this.name = name;
}

DelayedGreeting.prototype.greetEnglish = function() {
  setTimeout(function() {
    console.log("Hello ", this.name); // this.name will be undefined
  }, 500);
};

DelayedGreeting.prototype.greetSpanish = function() {
  setTimeout(
    () => console.log("Hola ", this.name), // function has the lexical scope of the parent
    500
  );
};

const greeter = new DelayedGreeting("rudresh");
greeter.greetEnglish();
greeter.greetSpanish();
