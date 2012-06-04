if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'use!underscore' ], function(_) {
  return {
    fizzBuzz : function(number) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible the 3 and 5, the function should return
      // 'fizzbuzz';
      // otherwise the function should return the number
      if (typeof number === 'undefined' ) {
        return(false);
      } else if ((number % 3)===0 && (number % 5)===0) {
        return('fizzbuzz');
      } else if((number % 3)===0) {
        return('fizz');
      } else if((number % 5)===0) {
        return('buzz');
      } else {
        return(number);
      }
    },
  };
});
