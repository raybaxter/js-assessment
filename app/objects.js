if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return(fn.call(obj, obj.name));
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var keys = new Array();
      for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
          keys.push(key+": " + obj[key]);
        }
      }
      return(keys);
    }
  };
});
