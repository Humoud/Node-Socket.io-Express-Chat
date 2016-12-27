function Bot() { };

////
// For Instance methods
// var method = Bot.prototype;
// method.greet = function(){
//   return "hi"
// }

////
//  Static Methods

Bot.greet = function(){
  return "hi";
}

Bot.getName = function(){
  return "I am Bot!";
}


module.exports = Bot;
